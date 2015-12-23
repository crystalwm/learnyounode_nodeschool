/**
 * Created by John on 2015-08-18.
 */
    var http=require('http');

var url=['http://www.baidu.com','http://www.sina.com','http://www.qq.com'];
var count=0;
const BufferList = require('bl');
var bl = new BufferList();

var result=[];

/*
url.forEach(function(value,index){
    http.get(value,function(res){

        var bl=[];

        res.on('data',function(chunked){
            bl.push(chunked);

        });
        res.on('end',function(){
            result.push(Buffer.concat(bl));
            console.log(value);
            console.log(result);
        });


        count++;

        if(count==3){
            printResutl();
            console.log('result');
        }
    });
});
*/

function printResutl(){
    result.forEach(function(value,index){
        console.log(value.toString());
    });
}

for(var i=0;i<3;i++){
    var value=url[i];
    http.get(value,function(res){
        var bl=[];
        res.on('data',function(chunked){
            bl.push(chunked);
        });
        res.on('end',function(){
            result.push(Buffer.concat(bl));
            count++;
            if(count==3){
                printResutl();
            }
        });
    });
}


