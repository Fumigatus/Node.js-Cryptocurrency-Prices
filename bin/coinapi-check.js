const commander = require('commander')
const check = require('../commands/check')

commander
    .command('price')
    .description('Check coin price')
    .option('--c <coinname>', 'Check for specific coin','BTC')
    .option('--i <interval>','Check for spesific interval','1D')
    .option('--cur <currency>', 'Change currency', 'USD')
    .action((cmd) => check.price(cmd))


commander.parse(process.argv)