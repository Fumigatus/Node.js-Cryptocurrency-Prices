const axios = require('axios')

class NomicsAPI {
    constructor(apiKey) {
        this.apiKey = apiKey
        this.baseURL = 'https://api.nomics.com/v1/currencies/ticker'
    }

    async getPrice(coinO, curO) {
        try {
            const res = await axios.get(`${this.baseURL}?key=${this.apiKey}&ids=${coinO}&convert=${curO}`)

            let output = ''
            res.array.forEach(coin => {
                output += `Coin name: ${coin.name} (${coin.symbol}), Price: ${coin.price.tofixed(2)}, Rank: ${coin.rank}, 24H Change: ${coin.id.price_change.tofixed(2)}`
            });
        } catch (err) {
            console.log(err)
        }
    }
}

