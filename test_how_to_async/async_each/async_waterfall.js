/**
 * Created by John on 2015-08-26.
 */
var fs=require('fs');
var http=require('http');
var async=require('async');
var path=require('path');

async.waterfall([function(callback){
    var filename=path.join('../public','async_waterfall.txt');
    //console.log(filename);
    var url=fs.readFileSync(filename);
  //  console.log(url.toString());
    callback(null,url.toString());
},function(url,callback){
    var req=http.get(url,function(res){
        var result=[];
        res.on('data',function(chunked){
            result.push(chunked);
        });
        res.on('end',function(){
            callback(null,Buffer.concat(result).toString().slice(0,1000));
        });

        res.on('error',function(err){
            if(err){
                return console.log(err,message);
            }
        });
    });

}],function(err,results){

    console.log(results);
});
