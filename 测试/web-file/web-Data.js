/**
 * Created by John on 2015-08-31.
 */

var http=require('http');

function getStautsCode(url,callback) {
    var req = http.get(url,function (req, res) {
        req.on('error', function (err) {
            if (err) {

                callback(err,null);
            }
        });
        callback(null,req.statusCode);
    });
}

exports.getStautsCode=getStautsCode;


