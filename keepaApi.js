const dotenv = require('dotenv').config({path: '.env'})
const express = require("express");
const https = require("https");
const fs = require('fs');
const decompressResponse = require("decompress-response");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const query = 'B07FKF1SXX';
const apiKey = process.env.MY_KEY;
const url = `https://api.keepa.com/product?key=${apiKey}&domain=1&asin=${query}`;
let productData = {};

https.get(url, function (response) {
  response = decompressResponse(response);

  let data;
  response.on("data", function (chunk) {
    if (!data) {
      console.log('if', chunk)
      data = chunk;
    } else {
      console.log("else",chunk)
      data += chunk;
    }
    const asinData = JSON.parse(data);

    console.log('asinData', asinData)
    const products = asinData.products[0];
    productData = {
      title: products.title,
      asin: products.asin,
      brand: products.brand,
      size: products.size,
      description: products.description,
      features: products.features,
      images: products.imagesCSV,
      // salesRanks: products.salesRanks,
      csv: products.csv[1].pop(),
      fbaFees: products.fbaFees
    }
    console.log(productData)
  });
});
