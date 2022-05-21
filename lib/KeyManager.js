const Configstore = require('configstore')
const pkg = require('inquirer')

class KeyManager {
    constructor() {
        this.conf = new Configstore(pkg.name)
    }

    setKey(key) {
        this.conf.set('apiKey', key)
        return key
    }

    getKey() {
        const key = this.conf.get('apiKey')
        if (!key) {
            throw new Error('API key not found.')
        }
        return key
    }

    deleteKey() {
        const key = this.conf.get('apiKey')
        if (!key) {
            throw new Error('API key not found.')
        }

        this.conf.delete('apiKey')
        return key
    }
}

module.exports = KeyManager