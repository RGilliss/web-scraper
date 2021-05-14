const fetch = require('node-fetch');

const url = `https://sandbox.walmartapis.com/v3/eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM/detail`

fetch(url)
  .then(res => console.log(res))
  .catch(err => console.log(err))