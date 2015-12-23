var tls=require('tls');
var fs=require('fs');

var options={
    key:fs.readFileSync('./keys/server/my-server.key.pem'),
    cert:fs.readFileSync('./keys/server/my-server.crt.pem'),
    requestCert:false,
    ca:[fs.readFileSync('./keys/ca/my-root-ca.crt.pem')]
};
console.log(fs.readFileSync('./keys/server/my-server.key.pem'));

var server=tls.createServer(options,function(stream){
    console.log('server connected',stream.authorized ? 'authorized':'unauthorized');
    stream.write("welcome!\n");
    stream.setEncoding('utf8');
    stream.pipe(stream);
});

server.listen(8000,function(){
    console.log('server bound');  //https://127.0.0.1:8000/ 就可以看到效果了
});