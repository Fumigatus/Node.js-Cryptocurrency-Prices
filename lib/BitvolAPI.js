const axios = require('axios')
const puppeteer = require('puppeteer')

async function bitvolData() {
    const bitvolData = await axios.get('https://t3index.com/wp-content/uploads/summary_last.json')
    const bitvolValue= await bitvolData.data.Bitcoin.last_close
    return bitvolValue
    // console.log(bitvolValue)
}

async function scrapeLastClose(){
    const url='https://finance.yahoo.com/quote/BTC-USD/'

    const browser= await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    const [el] = await page.$x('/html/body/div[1]/div/div/div[1]/div/div[3]/div[1]/div/div[1]/div/div/div/div[2]/div[1]/table/tbody/tr[1]/td[2]')
    const txt = await el.getProperty('textContent')
    const rawTxt = await txt.jsonValue()
    browser.close()
    return rawTxt;
    // console.log(`${rawTxt}`)
}

module.exports = {
    bitvolData,
    scrapeLastClose,
}