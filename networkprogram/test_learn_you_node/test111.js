/**
 * Created by John on 2015-08-18.
 */

var http=require('http');
const BufferList = require('bl');


var iconv=require('iconv-lite');
var result=[];
//process.argv[2]
http.get('http://www.qq.com',function(res){
    var converterStream = iconv.decodeStream('win1251');

    res.on('data',function(chunk){
        result.push(chunk);
    });

    res.on('end',function(){

       // console.log(iconv.decode(bl,'gb2312'));
     //   var buf=Buffer.concat(res,size);
      var buf=Buffer.concat(result);
        console.log(buf);
        console.log(iconv.decode(buf,'gb2312'));
    });

});


