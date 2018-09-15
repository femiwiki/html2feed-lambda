'use strict'

const ApiBuilder = require('claudia-api-builder')
const fetch = require('node-fetch')
const { JSDOM } = require("jsdom");

const api = new ApiBuilder()
api.get('html2feed', async _ => {
  const res = await fetch('https://womenlink.or.kr/notices')
  const html = await res.text()
  const dom = new JSDOM(html)
  const document = dom.window.document

  return {
    titles: [...document.querySelectorAll('.post-list-box-excerpt__title')].map(x => x.textContent.trim())
  }
})
module.exports = api
