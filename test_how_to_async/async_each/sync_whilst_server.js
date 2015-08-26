/**
 * Created by John on 2015-08-26.
 */
var http=require('http');
var url=require('url')



var server=http.createServer(function(req,res){
    var count=url.parse(req.url,true).query.count;
    console.log(count);
    if(count==5)
    {
        res.write('meerkat');
        res.end();

    }
    else
    {
        res.write('ok');
        res.end();

    }
});

server.listen('8014');
