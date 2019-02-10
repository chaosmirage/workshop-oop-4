#!/usr/bin/env node
import program from 'commander';
import makeWeather from '..';

program
  .version('0.1.0')
  .arguments('[ip]')
  .action(async (input) => {
    try {
      console.log('it work');
    } catch (e) {
      console.log(e);
      process.exit(1);
    }
  })
  .parse(process.argv);
