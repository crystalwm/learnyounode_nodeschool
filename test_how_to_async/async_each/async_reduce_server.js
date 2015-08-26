/**
 * Created by John on 2015-08-25.
 */
var http=require('http');
var url=require('url')



var server=http.createServer(function(req,res){
    var num=url.parse(req.url,true).query.num;
    var result=Number(num)+2;
    res.write(result.toString());
    res.end();
});

server.listen('8012');

