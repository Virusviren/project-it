//jshint esversion:6
 ///Users/viren/Desktop/Project-it/index.js
const express = require("express");
var cors = require('cors')
var bodyParser = require('body-parser')
var barcodeId;
const app = express();
//import{str} from "/index.js";
//import as str1 from 'index.js';
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', express.static(__dirname + '/'));

//const {barcode1} = require(__dirname + "/index.js");
app.get('/products/:id', cors(), function (req, res, next) {
  res.json({msg: str})
  console.log(str);
  
})

app.get("/", function(req, res) {
  res.sendFile(__dirname+"/index.html");
  console.log(__dirname);
  //console.log(req.body.str);
  
});
app.post('/', function(req, res) {
  //console.log(req.body.text);
  barcodeId = req.body.text;
  //console.log('req received');
  res.redirect('/');
  console.log(barcodeId);
});

 
// app.post("/",function(req,res){
//   var code = req.body.str;
//   res.sendFile(__dirname+"/index.html");
// })
app.listen(3000,()=>{
  console.log("Server Started on port 3000.");
  
});