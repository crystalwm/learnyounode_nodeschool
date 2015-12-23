/**
 * Created by John on 2015-08-09.
 */
var http=require('http');
http.get(process.argv[2],function(res){
    var result=null;
    res.on('data',function(chunk){
        result+=chunk;
    });

    res.on('end',function(){
        console.log(result);
    });
});