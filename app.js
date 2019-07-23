//Canvas App
const express = require('express');
const app = express();
const port = process.env.PORT ||  3000;
const path= require('path');

const morgan = require('morgan');

const root = __dirname+ '/public';
app.use(express.static(root))
app.use(express.static(root + '/html'));
app.use(express.static(root + '/css'));
app.use(express.static(root + '/js'));
app.use(morgan('dev'));

app.get('/', function(req, res){
  res.sendFile('index.html');
});
app.get('/calc.html', function(req, res){
  res.sendFile('/calc.html');
});
app.get('/madlibs.html', function(req, res){
  res.sendFile('/madlibs.html');
});
app.get('/piecharts.html', function(req, res){
  res.sendFile('/piecharts.html');
});
app.get('/interestcalculator.html', function(req, res){
  res.sendFile('/interestcalculator.html');
});
app.get('/interactivemap.html', function(req, res){
  res.sendFile('/interactivemap.html');
});
app.get('/trigcircle.html', function(req, res){
  res.sendFile('/trigcircle.html');
});








app.listen(port, function(){
  console.log(`The app is listening on port: ${port}`)});;
