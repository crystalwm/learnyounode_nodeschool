/**
 * Created by John on 2015-08-11.
 */


var http = require('http')
var fs = require('fs');
var path=require('path');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })

    //fs.createReadStream('D:\WebStorm9.0.2\\learnnode\\public\\txt\\test_http_file_server.txt').pipe(res)
    fs.createReadStream(path.join('D:/WebStorm9.0.2/learnnode/public/txt','test_http_file_server.txt')).pipe(res);

})
server.listen(80)
