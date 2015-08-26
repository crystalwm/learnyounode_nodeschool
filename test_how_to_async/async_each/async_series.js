/**
 * Created by John on 2015-08-26.
 */

var http=require('http');
var async=require('async');
var iconv=require('iconv-lite');

async.series({requestOne:function(callback){
    fetchURL('http://www.baidu.com',callback,'utf-8');
},requestTwo:function(callback){
    fetchURL('http://www.qq.com',callback,'gb2312');
}},function(err,results){
    if(err){
        return console.log(err);
    }
    console.log(results);
});

function fetchURL(url,callback,encoding){
    var req=  http.get(url,function(res){
        var result=[];
        res.on('data',function(chunked){
            result.push(chunked);
        });
        res.on('end',function(){
            callback(null,iconv.decode(Buffer.concat(result),encoding).slice(0,1000));
        });
        res.on('error',function(err){
            callback(err,null);
        });
    });
    req.end();

}