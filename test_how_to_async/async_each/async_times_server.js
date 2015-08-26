/**
 * Created by John on 2015-08-26.
 */
var http=require('http');
var url=require('url');
var querystring=require('querystring');



var server=http.createServer(function(req,res){
    var result='';
    req.on('data',function(chunked){
        result+=chunked;
    });

    req.on('end',function(){
        console.log(querystring.parse(result));
    });
    res.write('ok');
    res.end();
});

server.listen('8013');
