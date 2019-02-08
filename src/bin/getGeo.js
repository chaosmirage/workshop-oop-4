#!/usr/bin/env node

import getGeo from '..';

console.log(getGeo(Number(process.argv[process.argv.length - 1])));
