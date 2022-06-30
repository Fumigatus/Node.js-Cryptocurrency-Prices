const axios = require('axios')

async function data(){
    const bitvolData = await axios.get('https://t3index.com/wp-content/uploads/summary_last.json')
    console.log(bitvolData.data.Bitcoin.last_close)
}

data()
module.exports = data