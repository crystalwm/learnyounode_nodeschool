/**
 * Created by John on 2015-08-21.
 */


var net = require('net');
var server = net.createServer(function(c) { //'connection' listener
    console.log('client connected');
    c.on('data',function(chunked){
        console.log(chunked.toString());
    });
    c.on('end', function() {
        console.log('client disconnected');
    });
    c.write('hello\r\n');
    c.pipe(c);
});
server.listen(8124, function() { //'listening' listener
    console.log('server bound');
});