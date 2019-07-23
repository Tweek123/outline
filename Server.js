/*
var http = require("http");
var path = require("path");
var ServerIP = '127.0.0.1',
    port = '8080';

*/


var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'ad6455037@gmail.com',
        pass: '123456Pochta'
    }
});

/*
var Server = http.createServer(function (request , response) {

    console.log(request.body);
    var SampleJsonData = JSON.stringify([{"ElementName":"ElementValue"}]);
    console.log(SampleJsonData);











    response.end('_testcb(' + SampleJsonData + ')'); // this is the postbackmethod
   }); 
Server.listen(port, ServerIP, function () {
    console.log("Listening..." + ServerIP + ":" + port);
});

*/



var express = require('express');
var bodyParser     =        require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', function (req, res) {
  console.log('123');
  console.log(req.body.FirstName);

transporter.sendMail({
    from: 'ad6455037@gmail.com',
    to: 'swapep@mail.ru',
    subject: 'hello world!',
    text: req.body.FirstName + '\n' + req.body.LastName  + '\n' + req.body.Email 
});


});

app.listen(3000);