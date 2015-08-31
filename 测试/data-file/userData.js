/**
 * Created by John on 2015-08-31.
 */

var fs=require('fs');
var fileName='./file.json';

module.exports={
    get:function(){
       var data=fs.readFileSync(fileName,'utf-8');
        return JSON.parse(data);
    },
    save:function(user){

        //我们先取到数据，然后再存入
        var users=this.get();
        users.push(user);

        fs.writeFileSync(fileName,JSON.stringify(users));
    }
};
