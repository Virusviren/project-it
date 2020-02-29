//jshint esversion:6
const express = require("express");

const app = express();

app.use(express.urlencoded({extended: true}));
//app.use(express.static("public"));

app.use('/', express.static(__dirname + '/'));
app.get("/", function(req, res) {
  res.sendFile(__dirname+"/index.html");
  console.log(__dirname);
});
app.listen(3000);