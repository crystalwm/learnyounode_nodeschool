/**
 * Created by John on 2015-08-29.
 */

var http=require('http');
var server=http.createServer(function(req,res){
    res.write('<head><meta charset="utf-8"/></head>');
    res.write('80端口被占用');
    res.end();
});
server.listen(80);