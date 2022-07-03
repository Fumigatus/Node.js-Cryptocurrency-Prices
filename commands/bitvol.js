const { bitvolData, scrapeLastClose } = require('../lib/BitvolAPI')


async function bitvolCalc() {
    const bitvolValue = await bitvolData()
    console.log(bitvolValue)
    console.log(await scrapeLastClose())
}


module.exports = bitvolCalc