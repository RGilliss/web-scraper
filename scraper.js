const rp = require('request-promise');
const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = `https://www.reddit.com`;


puppeteer
  .launch()
  .then(browser => browser.newPage())
  .then(page => page.goto(url).then(() => page.content()))
  .then(html => $('h2', html).each(function() {
    console.log($(this).text())
  }))
  .catch(err => console.log(err));
