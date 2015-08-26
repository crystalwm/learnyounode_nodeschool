/**
 * Created by John on 2015-08-25.
 */
var async=require('async');
var http=require('http');

var arr=['http://www.baidu.com','http://www.qq.com'];

async.map(arr,function(item,done){
    var req=http.get(item,function(res){
        var result=[];
        res.on('data',function(chunked){
            result.push(chunked);
        });

        res.on('end',function(){
            done(null,Buffer.concat(result).toString().slice(0,1000));
        });

        res.on('error',function(err){
            done(err,null);
        });
    });
    req.end();
},function(err,results){
    if(err){
        return console.log(err);
    }
    console.log(results);
});