var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');
var hitReturn;

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.post('/equal', function(req, res) {
  console.log(req.body);
  var x = Number(req.body.x);
  var y = Number(req.body.y);
  var operator = req.body.z;
  switch(operator) {
    case 'subtract':
      hitReturn = x - y;
      break;
    case 'add':
      hitReturn = x + y;
      break;
    case 'divide':
      hitReturn = x / y;
      break;
    case 'mulitply':
      hitReturn = x * y;
    }
    res.sendStatus(200);
  });
app.get('/solution', function(req, res){
  hitReturn += '';
  res.send(hitReturn);

});

app.listen(3000);
