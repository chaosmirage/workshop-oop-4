#!/usr/bin/env node
import program from 'commander';
import getGeo from '..';

program
  .version('0.1.0')
  .arguments('[ip]')
  .action((ip) => {
    getGeo(ip);
  })
  .parse(process.argv);
