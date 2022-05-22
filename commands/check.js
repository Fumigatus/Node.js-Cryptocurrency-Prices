const KeyManager = require('../lib/KeyManager')
const NomicsAPI = require('../lib/NomicsAPI')

const check = {
    async price(cmd) {
        try {
            const keyManager = new KeyManager()
            const key = keyManager.getKey()

            const api = new NomicsAPI(key)

            const outputData = await api.getPrice(cmd.coin, cmd.cur)

            console.log(outputData)

        } catch (err) {
            console.log(`${err}`)
        }
    }
}

module.exports = check