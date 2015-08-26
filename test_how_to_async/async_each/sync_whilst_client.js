/**
 * Created by John on 2015-08-26.
 */
 var http=require('http');
var async=require('async');

var result="";
var count=0;

async.whilst(function(){
        var pattern =/.*meerkat.*/;
        if(pattern.test(result)){
            return false;
        }
        else
            return true;
    },
function(callback){

    var url="http://localhost:8014/?count="+count;
    var req=http.get(url,function(res){

        var res_data="";

        res.on('data',function(chunked){
            res_data+=chunked;
        });
        res.on('end',function(){
            console.log(url);
            result=res_data;
            count++;
            setTimeout(callback, 1000);
        });
        res.on('error',function(err){
            callback(err);
        });
    });
    req.end();
},
function(err){
    if(err){
        console.log(err.message);
    }
    //记录需要调用的请求数目
    console.log(count);
});
