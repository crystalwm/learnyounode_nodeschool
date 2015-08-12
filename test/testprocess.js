/**
 * Created by John on 2015-08-09.
 */
var res=0;
for(var i=2;i<process.argv.length;i++){
    res+=Number(process.argv[i]);
}
console.log(res);
