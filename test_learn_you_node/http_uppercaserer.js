/**
 * Created by John on 2015-08-12.
 */

var http=require('http');
var querystring=require('querystring');

var server=http.createServer(function(req,res){
    /*���󷽷���req.method �õ���������
    * */
    /*�������壺
    ����data�¼����м���
    * */
    var recive_data="";
    var send_data={};


    req.setEncoding('utf-8');
    req.on('data', function (chunk) {

        recive_data=querystring.parse(chunk);

        for(var p in recive_data){
            send_data[p]=recive_data[p].toUpperCase();
        }
    }) ;
    req.on('end', function () {
        res.writeHead(200,{'content-type':'text/plain;charset=UTF-8'});
        res.write(JSON.stringify(send_data));
        res.end();

    });


});

server.listen(8080);