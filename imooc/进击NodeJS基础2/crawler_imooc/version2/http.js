var http=require('http');
var cheerio=require('cheerio');
var urls=['http://www.imooc.com/learn/348',
          'http://www.imooc.com/learn/259',
          'http://www.imooc.com/learn/197'];
var coursesDate=[];

function filterChapter(html){
    var $=cheerio.load(html);
    var chapters=$('.mod-chapters');
    var courseData=[];
    chapters.each(function(item){
        var chapter=$(this);
        var chapterTitle=chapter.find('strong').text();
        courseData.push(chapterTitle);
    });
    return courseData;
}

function printCourseInfo(courseData){
    courseData.forEach(function(item){
        console.log(item+'\n');
    });
}


http.get(urls[0],function(res){
    var html='';
    res.on('data',function(data){
        html+=data;
    });
    res.on('end',function(){
        coursesDate.push(filterChapter(html));
        http.get(urls[1],function(res){
            var html='';
            res.on('data',function(data){
                html+=data;
            });
            res.on('end',function(){
                coursesDate.push(filterChapter(html));
                http.get(urls[2],function(res){
                    var html='';
                    res.on('data',function(data){
                        html+=data;
                    });
                    res.on('end',function(){
                        coursesDate.push(filterChapter(html));
                        console.log(coursesDate);
                    });
                }).on('error',function(){
                    console.log('获取课程数据失败');
                });
            });
        }).on('error',function(){
            console.log('获取课程数据失败');
        });


    });
}).on('error',function(){
    console.log('获取课程数据失败');
});