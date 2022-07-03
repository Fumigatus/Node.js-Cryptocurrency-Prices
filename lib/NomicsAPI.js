const axios = require('axios')
const colors = require('colors')

class NomicsAPI {
    constructor(apiKey) {
        this.apiKey = apiKey
        this.baseURL = 'https://api.nomics.com/v1/currencies/ticker'
    }

    async getPrice(coinO, curO, intervalO) {
        try {
            const interval = intervalO.toString().toLowerCase()
            const res = await axios.get(`${this.baseURL}?key=${this.apiKey}&ids=${coinO.toUpperCase()}&interval=${interval}&convert=${curO.toUpperCase()}`)
            let output = ''
            res.data.forEach(coin => {
                let price = parseFloat(coin.price).toFixed(2)
                let prcChange = parseFloat(coin[interval].price_change).toFixed(2)
                let pctChange = parseFloat(coin[interval].price_change_pct * 100).toFixed(2)

                output += `Coin name: ${coin.name.cyan} ${('(' + coin.symbol + ')').cyan}, Price: ${prcChange > 0 ? price.green : price.red}, ${interval} price change: ${prcChange > 0 ? prcChange.green : prcChange.red} / ${pctChange > 0 ? pctChange.green : pctChange.red}% , Rank: ${coin.rank.blue}\n`.bold
            });
            return output
        } catch (err) {
            console.log(`${err}`)
        }
    }

    async getVolume(coinO, intervalO, curO) {
        try {
            const interval = intervalO.toLowerCase()
            curO = curO.toUpperCase()
            coinO = coinO.toUpperCase()
            const res = await axios.get(`${this.baseURL}?key=${this.apiKey}&ids=${coinO}&interval=${interval}&convert=${curO}`)
            let output = ''
            res.data.forEach(coin => {
                let volume = parseFloat(coin[interval].volume).toFixed(2)

                output += `Coin name: ${coin.name.cyan} ${('(' + coin.symbol + ')').cyan} Volume: ${volume.yellow} ${curO} \n`.bold
            })
            return output
        } catch (err) {
            console.log(`${err}`)
        }
    }
}

module.exports = NomicsAPI
