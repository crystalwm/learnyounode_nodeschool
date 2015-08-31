/**
 * Created by John on 2015-08-28.
 */
var fs=require('fs');


/*
books中存放的数据是由json对象组成的数组。
可以使用换行符分割字符串
* */
var books=fs.readFileSync('./books.json');
 books=books.toString().trim().slice(1,-1);
books=books.split('\n');
books.forEach(function(item,index){
    if(index!=books.length-1)
        books[index]=item.slice(0,-1);
});


var genre="";
var books_name=[];
var expected=[];


books.forEach(function(item,index){
    item=JSON.parse(item);

    if(genre==item.genre){
        books_name.push(item.name);

    }
    else
    {
        //如果genre不问""则，重置genre和books的值
        if(genre!=""){
            expected.push({
                "name":genre,
                "books":books_name
            });
            genre=item.genre;
            books_name=[];

        }
        else{
            genre=item.genre;
            books_name=[];

        }

    }

});
console.log(expected);
