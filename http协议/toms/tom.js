/**
 * Created by John on 2015-08-27.
 */
function tom_cookie(res){
    res.writeHead(200,{
        'Set-Cookie': 'mycookie1=test;path=/tom',
        'Content-Type':'text/plain;charset=utf-8'
    });

    res.write('<head><meta charset="utf-8"/></head>');
    res.write('ÓÐcookie','UTF-8');

    res.end();
}
exports.tom_cookie=tom_cookie;