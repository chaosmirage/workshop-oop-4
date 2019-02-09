#!/usr/bin/env node
import program from 'commander';
import getGeo from '..';

program
  .version('0.1.0')
  .arguments('[ip]')
  .action(async (input) => {
    const geoService = getGeo();

    try {
      const data = await geoService.loadData(input);
      console.log(data);
    } catch (e) {
      console.log(e);
      process.exit(1);
    }
  })
  .parse(process.argv);
