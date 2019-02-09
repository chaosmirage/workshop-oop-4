import IP_DATA_MOCK from './mock/ipData';
import getGeo from '../src/getGeo';

test('Set init host and ip', async () => {
  const ip = '127.0.0.1';
  const host = 'test';
  const geoService = getGeo({ ip, host });
  expect(geoService.getUrl()).toBe(`${host}/${ip}`);
});

test('Pass custom url to loadData', async () => {
  const CUSTOM_URL = 'customUrl';
  const CUSTOM_URL_RESPONSE = 'customUrlResponse';

  const makeRequest = (url) => {
    if (url === CUSTOM_URL) {
      return Promise.resolve(CUSTOM_URL_RESPONSE);
    }
  };


  const geoService = getGeo({ loader: makeRequest });
  await geoService.loadData(CUSTOM_URL);
  expect(geoService.getInfo()).toBe(CUSTOM_URL_RESPONSE);
});

test('Load data', async () => {
  const makeRequest = () => {
    return Promise.resolve(IP_DATA_MOCK);
  };

  const geoService = getGeo({ loader: makeRequest });
  await geoService.loadData();
  expect(geoService.getInfo()).toBe(IP_DATA_MOCK);
});
