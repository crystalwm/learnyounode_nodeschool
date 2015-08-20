/**
 * Created by John on 2015-08-20.
 */
var fs=require('fs');
var path=require('path');

var filename=path.join('D:/WebStorm9.0.2/learnnode/public/txt','test_http_file_server.txt');

fs.readFile(filename,function(err,data){
    var lines=data.toString().split('\n').length;
    console.log(lines);
});
