import makeWeatherService from '../src/makeWeatherService';
import MOSCOW_DATA_MOCK from './mock/moscow';

test('MetaWeather work', async () => {
  const MOSCOW = 'moscow';
  const CITY_ID = '001';
  const META_WEATHER = 'MetaWeather';

  const serviceConfig = {
    loader: (host, query) => {
      if (query === `search/?query=${MOSCOW}`) {
        return { data: [ { woeid: CITY_ID } ] };
      }

      if (query === CITY_ID) {
        return Promise.resolve({ data: MOSCOW_DATA_MOCK });
      }
    },
    serviceName: META_WEATHER,
  };

  const weatherService = makeWeatherService(serviceConfig);

  const data = await weatherService.getData(MOSCOW);
  const serviceName = weatherService.getServiceName();

  expect(serviceName).toBe(META_WEATHER);
  expect(data).toBe(MOSCOW_DATA_MOCK);
});
