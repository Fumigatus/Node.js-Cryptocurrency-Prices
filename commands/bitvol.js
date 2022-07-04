const { bitvolData, scrapeLastClose } = require('../lib/BitvolAPI')


async function bitvolCalc() {
    let bitvolValue = await bitvolData()
    let dailyClose = await scrapeLastClose()
    let x = bitvolValue * 100 / 365
    let y = dailyClose / x
    // src of formula: https://twitter.com/hophopcoin/status/1377215015128797186
    console.log(`Estimated daily top price\n${(dailyClose + y).toFixed(2)}\nEstimated daily bottom price\n${(dailyClose - y).toFixed(2)}`)
}


module.exports = bitvolCalc