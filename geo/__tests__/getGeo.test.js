import IP_DATA_MOCK from './mock/ipData';
import getGeo from '../src/getGeo';

test('Pass custom host and ip', async () => {
  const ip = '127.0.0.1';
  const host = 'test';
  const geoService = getGeo({ ip, host });
  expect(geoService.getUrl()).toBe(`${host}/${ip}`);
});

test('Load data', async () => {
  const makeRequest = () => {
    return Promise.resolve(IP_DATA_MOCK);
  };

  const geoService = getGeo({ loader: makeRequest });
  await geoService.loadData();
  expect(geoService.getInfo()).toBe(IP_DATA_MOCK);
});
