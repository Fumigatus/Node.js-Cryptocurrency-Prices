const inquirer = require('inquirer')
const KeyManager = require('../lib/KeyManager.js')
const { isRequired } = require('../utils/validation')

const key = {
    async set() {
        const keyManager = new KeyManager()
        const input = await inquirer.prompt({
            type: 'input',
            name: 'key',
            message: 'Enter API key',
            validate: isRequired
        })
        const key = keyManager.setKey(input.key)

        if (key) {
            console.log('API key set')
        }

    },
    show() {
        try {
            const keyManager = new KeyManager()
            const key = keyManager.getKey()
            console.log(key)
        } catch(err) {
            console.log(`${err}`)
        }
    },
    delete() {
        const keyManager = new KeyManager
        keyManager.deleteKey();
        console.log('API key is removed.')
    }
}

module.exports = key