/**
 * Created by John on 2015-08-31.
 */

var should=require('should');
var req=require('../web-file/web-Data.js');

describe('返回状态码',function(){
    it('返回的状态码应该是200',function(done){
        req.getStautsCode('http://www.baidu.com',function(err,statusCode){
            should.not.exists(err);
            statusCode.should.equal(200);
            done();

        });
    });

});
