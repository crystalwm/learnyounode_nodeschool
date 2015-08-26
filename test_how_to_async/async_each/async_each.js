/**
 * Created by John on 2015-08-24.
 */
var async=require('async');
var http=require('http');

var arr=['http://www.baidu.com','http://www.qq.com'];

async.each(arr,function(item,done){
    var req=http.get(item,function(res){
        var result=[];
        res.on('data',function(chunked){
            result.push(chunked);
        });
        res.on('end',function(){
            console.log(Buffer.concat(result).toString());
            done();
        });

        res.on('error',function(err){
            done(err);
        });
    });
    req.end();

},function(err){
    console.log(err.message);
});