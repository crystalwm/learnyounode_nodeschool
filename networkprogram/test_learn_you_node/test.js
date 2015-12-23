/**
 * Created by John on 2015-08-11.
 */
var now=new Date();
var year=now.getFullYear();
var mon=now.getMonth()+1>10?now.getMonth()+1:'0'+now.getMonth();
var day=now.getDay()>10?now.getDay():'0'+now.getDay();
var hour=now.getHours()>10?now.getHours():'0'+now.getHours();
var min=now.getMinutes()>10?now.getMinutes():'0'+now.getMinutes();

console.log(year+'-'+mon+'-'+day+' '+hour+':'+min);