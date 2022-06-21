const axios = require('axios')

const bitvol = axios().get('https://t3index.com/wp-content/uploads/summary_last.json')


module.exports=bitvol