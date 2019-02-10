#!/usr/bin/env node
import program from 'commander';
import makeWeatherService from '..';

program
  .version('0.1.0')
  .arguments('<city>')
  .option('-s, --service <service>', 'choose one of weather service: MetaWeather, WeatherBit')
  .action(async (city) => {
    try {
      const serviceName = program.service;
      const weatherService = makeWeatherService({ serviceName });
      const data = await weatherService.getData(city);
      console.log(data);
    } catch (e) {
      console.log(e);
      process.exit(1);
    }
  })
  .parse(process.argv);
