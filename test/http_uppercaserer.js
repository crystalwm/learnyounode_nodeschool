/**
 * Created by John on 2015-08-12.
 */

var http=require('http');

var server=http.createServer(function(req,res){
    /*���󷽷���req.method �õ���������
    * */
    /*�������壺
    ����data�¼����м���
    * */
    var receive_data="";
    req.setEncoding('utf-8');
    req.on('data',function(chunked){
        receive_data+=chunked;
    });

    console.log(receive_data);
});

server.listen(8080);