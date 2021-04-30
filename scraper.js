const rp = require('request-promise');
const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = `https://www.realcanadiansuperstore.ca/Lawn,%20Garden%20&%20Patio/Grills%20&%20Outdoor%20Cooking/Bbqs,%20Smokers%20&%20Accessories/Grilling%20Cookware/everyday-essentials-bbq-tongs/p/21297769_EA`;
const selector = `span[class="price__value selling-price-list__item__price selling-price-list__item__price--now-price__value"]`

puppeteer
  .launch()
  .then(browser => browser.newPage())
  .then(page => page.goto(url).then(() => page.content()))
  .then(html => {
    console.log($(selector, html).html())
  })
  .catch(err => console.log(err));
