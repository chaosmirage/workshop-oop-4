#!/usr/bin/env node
import program from 'commander';
import makeWeatherService from '..';

program
  .version('0.1.0')
  .arguments('<city>')
  .option('-s, --service <service>', 'choose one of weather service: MetaWeather, WeatherBit')
  .action(async (city) => {
    try {
      const config = {
        serviceName: program.service,
        apiKey: '3d2a467351dd4b3c804f184f9c695776',
      };

      const weatherService = makeWeatherService(config);
      const data = await weatherService.getData(city);
      console.log(data);
    } catch (e) {
      console.log(e);
      process.exit(1);
    }
  })
  .parse(process.argv);
