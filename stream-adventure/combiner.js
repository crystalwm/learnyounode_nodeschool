/**
 * Created by John on 2015-08-28.
 */
var fs=require('fs');


/*
books�д�ŵ���������json������ɵ����顣
����ʹ�û��з��ָ��ַ���
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
        //���genre����""������genre��books��ֵ
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
