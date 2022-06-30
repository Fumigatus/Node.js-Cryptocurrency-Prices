const commander = require('commander')
const bitvol =require('../commands/bitvol')


commander
    .command('bitvol')
    .description('Check top and bottom price with bitvol')
    .action(bitvol)