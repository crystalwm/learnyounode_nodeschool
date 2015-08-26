/**
 * Created by John on 2015-08-12.
 */
var http=require('http');
var querystring=require('querystring');

var postData = querystring.stringify({
    content:'tom赞！',
    mid:8837
});

var optinos={
    hostname: 'localhost',
    port: 8080,
    method: 'POST',
    'Content-Type':'charset=UTF-8'

};

var req=http.request(optinos, function (res) {
    res.setEncoding('utf-8');
    res.on('data',function(chunked){
        console.log(chunked);
    });

});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

// write data to request body
req.write(postData);
req.end();
