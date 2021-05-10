const rp = require('request-promise');
const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = `https://www.realcanadiansuperstore.ca/thanos-mech/p/21205197_EA`;
const selector = `span[class="price__value selling-price-list__item__price selling-price-list__item__price--now-price__value"]`

puppeteer
  .launch()
  .then(browser => browser.newPage())
  .then(page => page.goto(url).then(() => page.content()))
  .then(html => {
    console.log($(selector, html).html())
  })
  .catch(err => console.log(err));
