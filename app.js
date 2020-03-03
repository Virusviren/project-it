//jshint esversion:6

const express = require("express");
var bodyParser = require('body-parser')

const app = express();
//import{str} from "/index.js";
//import as str1 from 'index.js';
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', express.static(__dirname + '/'));


app.get("/", function(req, res) {
  res.sendFile(__dirname+"/index.html");
  console.log(__dirname);
  console.log(req.body.str);
  
});

app.post("/",function(req,res){
  var code = req.body.str;
  res.sendFile(__dirname+"/index.html");
})
app.listen(3000,()=>{
  console.log("Server Started on port 3000.");
  
});