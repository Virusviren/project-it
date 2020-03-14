//jshint esversion:6
///Users/viren/Desktop/Project-it/index.js
require("dotenv").config();
const express = require("express");
var bodyParser = require("body-parser");
const axios = require("axios").default;
let ejs = require('ejs');
var barcodeId;
var body1 = "Viren";
const app = express();
app.set('view engine','ejs');

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

// app.use("/", express.static(__dirname + "/"));


app.get("/", function(req, res) {
  res.render("index");
  
  
});


app.get("/form1", function(req, res) {
  res.render("form1",{body1:body1});

  
});

app.post("/", function(req, res) {
  barcodeId = req.body.text;
  let result="";
  
  console.log(barcodeId);
  axios({
    url:
      "https://vision.googleapis.com/v1/images:annotate?key=" +
      process.env.API_KEY,
    method: "post",
  
    headers: {
      "X-Requested-With": "XMLHttpRequest"
    },
  
    data: {
      requests: [
        {
          image: {
            content: barcodeId
          },
          features: [
            {
              type: "TEXT_DETECTION"
            }
          ]
        }
      ]
    }
  })
    .then(response => {
      productBarcode = response.data.responses[0].fullTextAnnotation.text;
      //console.log(productBarcode);
      
      let reg = /\d+/g;
       result = productBarcode.match(reg).join("");
      console.log(result);
    
    })
    .catch(error => {
      console.log(error.response);
    });
   
   res.redirect("http://localhost:3000/form1");
   
});








app.listen(3000, () => {
  console.log("Server Started on port 3000.");
});

