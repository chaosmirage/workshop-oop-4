import MetaWeather from './MetaWeather';
import WeatherBit from './WeatherBit';

export default (options = {}) => {
  const { serviceName, ...rest } = options;

  const map = {
    MetaWeather: serviceOptions => new MetaWeather(serviceOptions),
    WeatherBit: serviceOptions => new WeatherBit(serviceOptions),
  };

  const serviceMaker = map[serviceName];

  if (!serviceMaker) {
    throw new Error('Service not provided');
  }

  return serviceMaker(rest);
};
