#!/usr/bin/env node
import program from 'commander';
import getGeo from '..';

program
  .version('0.1.0')
  .arguments('[ip]')
  .action((input) => {
    const ip = getGeo(input);

    ip.getInfo()
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  })
  .parse(process.argv);
