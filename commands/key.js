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
        console.log('TODO: show key value')
    },
    delete() {

    }
}

module.exports = key