/**
 * Created by John on 2015-08-26.
 */

var http=require('http');
var async=require('async');
var querystring=require('querystring');

async.series({
    one:function(callback){
        async.times(5,function(n,next){
            var options={
                hostname:'localhost',
                port:'8013',
                method:'POST'
            }
            var postData=querystring.stringify({"user_id":n});
            var req=http.request(options,function(res){
                var result="";

                res.on('data',function(chunked){
                    result+=chunked;
                });

                res.on('end',function(){
                   // console.log('次数'+n+'.返回结果：'+result);
                    next(null,result);

                });

                res.on('error',function(err){
                    next(err,null);

                });

            });

            req.write(postData);
            req.end();
        },function(err,results){
            if(err){
                return console.log(err);
            }
            callback(null,results);

        });
    },
    two:function(callback){
        var req=http.get('http://www.baidu.com',function(res){
            var result=[];
            res.on('data',function(chunked){
                result.push(chunked);
            });

            res.on('end',function(){
                callback(null,Buffer.concat(result).toString().slice(0,1000));
            });

            res.on('error',function(err){
                if(err){
                    return console.log(err.message);
                }

                callback(err,null);
            });
        });
        req.end();
    }
},function(err,results){
    console.log(results.two);
});