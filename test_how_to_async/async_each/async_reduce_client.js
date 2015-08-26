/**
 * Created by John on 2015-08-25.
 */
var http=require('http');
var async=require('async')

var arr=[2,4];
async.reduce(arr,0,function(memo,item,done){
    var options='http://localhost:8012/?num='+item;
    var req=http.get(options,function(res){
        var reduction='';
        res.on('data',function(chunked){
            reduction+=chunked;
        });

        res.on('end',function(){
            done(null,Number(reduction)+memo);
        });

        res.on('error',function(err){
            done(err,null);
        });

    });
    req.end();
},function(err,result){
    if(err){
        return console.log(err);
    }

    console.log(result);

});