#!/usr/bin/env node
const commander = require('commander')

commander
    .command('key','Get API key from https://nomics.com')
    .parse(process.argv)