/**
 * Created by John on 2015-08-09.
 */
var http=require('http');
const BufferList = require('bl');
var bl = new BufferList();
//process.argv[2]
http.get('http://www.baidu.com',function(res){


    res.on('data',function(chunk){
        bl.append(chunk);
    });

    res.on('end',function(){
        console.log(bl.toString());
    });

});
