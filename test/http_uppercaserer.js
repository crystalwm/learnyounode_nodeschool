/**
 * Created by John on 2015-08-12.
 */

var http=require('http');

var server=http.createServer(function(req,res){
    /*请求方法：req.method 得到方法名称
    * */
    /*请求主体：
    对于data事件进行监听
    * */
    var receive_data="";
    req.setEncoding('utf-8');
    req.on('data',function(chunked){
        receive_data+=chunked;
    });

    console.log(receive_data);
});

server.listen(8080);