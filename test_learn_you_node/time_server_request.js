/**
 * Created by John on 2015-08-21.
 */
var net = require('net');
var now=new Date();
var year=now.getFullYear();
var mon=now.getMonth()+1>10?now.getMonth()+1:'0'+now.getMonth();
var day=now.getDay()>10?now.getDay():'0'+now.getDay();
var hour=now.getHours()>10?now.getHours():'0'+now.getHours();
var min=now.getMinutes()>10?now.getMinutes():'0'+now.getMinutes();
var now_time=year+'-'+mon+'-'+day+' '+hour+':'+min;


var client = net.connect({port: 8124},
    function() { //'connect' listener
        console.log('connected to server!');
        client.write(now_time+'\r\n');
    });
client.on('data', function(data) {
    console.log(data.toString());
    client.end();
});
client.on('end', function() {
    console.log('disconnected from server');
});