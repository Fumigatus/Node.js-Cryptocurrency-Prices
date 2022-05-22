const axios = require('axios')

class NomicsAPI {
    constructor(apiKey) {
        this.apiKey = apiKey
        this.baseURL = 'https://api.nomics.com/v1/currencies/ticker'
    }

    async getPrice(coinO, curO) {
        try {
            const res = await axios.get(`${this.baseURL}?key=${this.apiKey}&ids=${coinO.toString().toUpperCase()}&interval=1d&convert=${curO}`)
            let output = ''
            res.data.forEach(coin => {
                output += `Coin name: ${coin.name} (${coin.symbol}), Price: ${parseFloat(coin.price).toFixed(2)}, 24H price change: ${parseFloat(coin["1d"].price_change).toFixed(2)}, Rank: ${coin.rank}\n`
            });
            return output
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = NomicsAPI
