/**
 * Created by John on 2015-08-27.
 */
var http = require('http');

function parseCookies (request) {
    var list = {},
        rc = request.headers.cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    return list;
}


http.createServer(function (request, response) {

    // To Read a Cookie
//    var cookies = parseCookies(request);

    // To Write a Cookie
    response.writeHead(200, {
        'Set-Cookie': 'mycookie2=test',
        'Content-Type': 'text/plain'
    });
    response.end('Hello World\n');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');