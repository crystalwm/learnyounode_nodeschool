var http=require('http');
var cheerio=require('cheerio');
var Promise=require('bluebird');
var urls=['http://www.imooc.com/learn/348',
    'http://www.imooc.com/learn/259',
    'http://www.imooc.com/learn/197'];
var coursesDate=[];
var htmlPromiseArray=[];

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

function getAsyncHTML(url){
    return new Promise(function(resolve,reject){
        http.get(url,function(res){
            var html='';
            res.on('data',function(data){
                html+=data;
            });
            res.on('end',function(){
                resolve(html);
            });
        }).on('error',function(e){
            reject(e);
            console.log('获取课程数据失败');
        });

    });
}


urls.forEach(function(value){
    htmlPromiseArray.push(getAsyncHTML(value));
});

Promise.all(
    htmlPromiseArray
).then(function(htmls){
   htmls.forEach(function(html){
       coursesDate.push(filterChapter(html));
   });
    printCourseInfo(coursesDate);
});
