#!/usr/bin/env node
import program from 'commander';
import getGeo from '..';

program
  .version('0.1.0')
  .arguments('[ip]')
  .action(async (input) => {
    const ip = getGeo(input);

    try {
      const info = await ip.getInfo();
      console.log(info);
    } catch (e) {
      console.log(e);
    }
  })
  .parse(process.argv);
