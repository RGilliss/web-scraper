const dotenv = require('dotenv').config({path: '.env'})
const fetch = require("node-fetch");

// const url = `https://api.keepa.com/`;


const express = require("express");
const https = require("https");
const decompressResponse = require("decompress-response");
const bodyParser = require("body-parser");
// const env = require("env")

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

// app.post("/", function (req, res) {
  // console.log(req.body.asinId);
  const query = 'b07JWGJ49W';
  const apiKey = process.env.MY_KEY;
  const url =
    `https://api.keepa.com/product?key=${apiKey}&domain=1&asin=${query}`;

  https.get(url, function (response) {
    // response = decompressResponse(response);
    // console.log(response)
    // console.log(response.statusCode);
    // console.log(response.headers);
    var data;
    response.on("data", function (chunk) {
      if (!data) {
        data = chunk;
      } else {
        data += chunk;
      }
      // const asinData = JSON.parse(data);

      console.log("Data",data);
      // res.send();
    });
  });
// });

// fetch(url)
// .then(response => {
//   let data;
//   response = decompressResponse(response);
//   response.on("data", function (chunk) {
//           if (!data) {
//             data = chunk;
//           } else {
//             data += chunk;
//           }
//           const asinData = JSON.parse(data);

//       console.log("Data",asinData);
//       // res.send();
//     });
        
// })
// .catch(err => console.log(err))