/**
 * Created by John on 2015-08-27.
 */

var http=require('http');
var url=require('url');
var toms=require('./toms/tom.js')

var server=http.createServer(function(req,res){


    var pathname=url.parse(req.url,true).pathname;
    console.log(url.parse(req.url,true));

    if(pathname=='/tom'){
        var today = new Date();
        var time = today.getTime() + 60*1000;
        var time2 = new Date(time);
        var timeObj = time2.toGMTString();

        var cookies='name='+encodeURIComponent('my');

        toms.tom_cookie(res);
        //res.writeHead(200,{
        //    'Set-Cookie': 'mycookie1=test',
        //    'Content-Type':'text/plain;charset=utf-8'
        //});

        //res.write('<head><meta charset="utf-8"/></head>');
        //res.write('有cookie','UTF-8');
        //
        //res.end();

    }
    else{
        res.writeHead(200, 'Content-Type:text/plain;charset=utf-8');
        res.write('<head><meta charset="utf-8"/></head>');
        res.write('没有cookie','UTF-8');
        res.end();
    }
});

server.listen(8015);