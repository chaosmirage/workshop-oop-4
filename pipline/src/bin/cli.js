#!/usr/bin/env node
import program from 'commander';
import makePipline from '..';

program
  .version('0.1.0')
  .action(() => {
    const pipline = makePipline();

    try {
      const file = pipline.readFiles()
        .filter()
        .sort()
        .middle()
        .plural()
        .upcase();

      console.log(file);
    } catch (e) {
      console.log(e);
      process.exit(1);
    }
  })
  .parse(process.argv);
