var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


router.post('/users',function(req,res){

  var body = [];
  req.on('data', function (chunk) {
    body.push(chunk);
  }) ;
  req.on('end', function () {
    body = Buffer.concat(body) ;
    console.log('body'+body.toString()) ;
  });

  var receiver_data=req.body;
  var send_data={};

  for(var p in receiver_data){
    send_data[p]=receiver_data[p].toUpperCase();
  }

  console.log(send_data);





  res.writeHead(200,{'content-type':'text/plain;charset=UTF-8'});
  res.write(JSON.stringify(send_data));
  res.end();
});
module.exports = router;
