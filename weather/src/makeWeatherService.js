import MetaWeather from './MetaWeather';
import WeatherBit from './WeatherBit';

export default (options = {}) => {
  const { serviceName, customServices, ...rest } = options;

  const map = {
    MetaWeather,
    WeatherBit,
    ...customServices,
  };

  const ServiceType = map[serviceName];

  if (!ServiceType) {
    throw new Error('Service not provided');
  }

  return new ServiceType(rest);
};
