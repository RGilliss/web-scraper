const rp = require('request-promise');
const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = `https://www.realcanadiansuperstore.ca/starfrit-the-rock-26cm-fry-pan/p/20952677_EA`;
// const url = `https://www.walmart.ca/en/ip/Red-Outdoor-Patio-80-Quart-Cooler-Cart-Ice-Beer-Beverage-Chest-Party-Portable/PRD1ED8P2XNZSYU`;
const selector = `span[class="price__unit selling-price-list__item__price selling-price-list__item__price--now-price__unit"]`
// const selector = 'span[class="css-2vqe5n esdkp3p0"]'
puppeteer
  .launch()
  .then(browser => browser.newPage())
  .then(page => page.goto(url).then(() => page.content()))
  .then(html => {
    console.log(html)
    console.log($(selector, html).html())
    return $(selector, html).html();
  })
  .catch(err => console.log(err));