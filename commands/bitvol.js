const { bitvolData, scrapeLastClose } = require('../lib/BitvolAPI')
const colors=require('colors')

async function bitvolCalc() {
    let bitvolValue = await bitvolData()
    let dailyClose = await scrapeLastClose()
    let x = bitvolValue * 100 / 365
    let y = dailyClose / x
    // src of formula: https://twitter.com/hophopcoin/status/1377215015128797186
    console.log(`Estimated daily high price:\n${(dailyClose + y).toFixed(2).green}\nEstimated daily low price:\n${(dailyClose - y).toFixed(2).red}\n`.bold)
}


module.exports = bitvolCalc