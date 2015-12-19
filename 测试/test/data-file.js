/**
 * Created by John on 2015-08-31.
 */
var users=require('../data-file/userData.js');
var should = require('should');

describe('读取数据',function(){
    it('数据的存取',function(){
        var data=users.get();
       users.save({name:"tom"});
        var newData=users.get();

        newData.length.should.equal(data.length+1);
    });
});
