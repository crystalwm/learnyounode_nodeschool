var http=require('http'),
    cheerio=require('cheerio'),
    url='http://www.imooc.com/learn/348';

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


http.get(url,function(res){
    var html='';
    res.on('data',function(data){
        html+=data;
    });
    res.on('end',function(){
        var courseData=filterChapter(html);
        printCourseInfo(courseData);
    });
}).on('error',function(){
    console.log('获取课程数据失败');
});
