/**
 * Created by John on 2015-08-18.
 */
    var http=require('http');

var url=['http://www.baidu.com','http://www.sina.com','http://www.qq.com'];
var count=0;
const BufferList = require('bl');
var bl = new BufferList();

var result=[];

url.forEach(function(value,index){
    http.get(value,function(res){

        var bl = new BufferList();
        console.log(value);

        res.on('data',function(chunked){
            bl.append(chunked);

        });
        res.on('end',function(){
            result.push(bl);
        });


        count++;

        if(count==3){
            printResutl();
        }
    });
});

function printResutl(){
    result.forEach(function(value,index){
        console.log(value.toString());
    });
}

