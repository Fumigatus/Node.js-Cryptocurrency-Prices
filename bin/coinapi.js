#!/usr/bin/env node
const commander = require('commander')

commander
    .command('key','Get API key from https://nomics.com')
    .command('check','Check coin price')
    .command('bitvol','Check bitcoin top and bottom price with bitvol calculation')
    .parse(process.argv)