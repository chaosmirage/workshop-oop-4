#!/usr/bin/env node
import program from 'commander';
import getGeo from '..';

program
  .version('0.1.0')
  .arguments('[ip]')
  .action(async (input) => {
    const geoService = getGeo({ ip: input });

    try {
      await geoService.loadData();
      console.log(geoService.getInfo());
    } catch (e) {
      console.log(e);
    }
  })
  .parse(process.argv);
