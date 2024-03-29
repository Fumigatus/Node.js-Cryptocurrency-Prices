const commander = require('commander')

const key = require('../commands/key')

commander
    .command('set')
    .description('Set API key => Get from https://nomics.com')
    .action(key.set)

commander
    .command('show')
    .description('Show API key')
    .action(key.show)

commander
    .command('delete')
    .description('Delete API key')
    .action(key.delete)

commander.parse(process.argv)