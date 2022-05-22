const axios = require('axios')
const colors = require('colors')

class NomicsAPI {
    constructor(apiKey) {
        this.apiKey = apiKey
        this.baseURL = 'https://api.nomics.com/v1/currencies/ticker'
    }

    async getPrice(coinO, curO) {
        try {
            const res = await axios.get(`${this.baseURL}?key=${this.apiKey}&ids=${coinO.toString().toUpperCase()}&interval=1d&convert=${curO.toString().toUpperCase()}`)
            let output = ''
            res.data.forEach(coin => {
                let price = parseFloat(coin.price).toFixed(2)
                let interval = parseFloat(coin["1d"].price_change).toFixed(2)
                let pctChange = parseFloat(coin["1d"].price_change_pct * 100).toFixed(2)

                output += `Coin name: ${coin.name.cyan} ${('('+coin.symbol+')').cyan}, Price: ${interval > 0 ? price.green : price.red}, 24H price change: ${interval > 0 ? interval.green : interval.red} / ${pctChange > 0 ? pctChange.green : pctChange.red} , Rank: ${coin.rank.blue}\n`.bold
            });
            return output
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = NomicsAPI
