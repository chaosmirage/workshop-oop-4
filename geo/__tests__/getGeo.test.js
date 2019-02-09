import IP_DATA_MOCK from './mock/myIPData';
import EXTERNAL_IP_DATA_MOCK from './mock/externalIPData';
import getGeo from '../src/getGeo';

test('Load my ip data ', async () => {
  const makeRequest = () => {
    return Promise.resolve(IP_DATA_MOCK);
  };

  const geoService = getGeo({ loader: makeRequest });
  const data = await geoService.loadData();
  expect(data).toBe(IP_DATA_MOCK);
});

test('Load external ip data ', async () => {
  const IP = '127.0.0.1';

  const makeRequest = (host, ip) => {
    if (ip === IP) {
      return Promise.resolve(EXTERNAL_IP_DATA_MOCK);
    }
  };

  const geoService = getGeo({ loader: makeRequest });
  const data = await geoService.loadData(IP);
  expect(data).toBe(EXTERNAL_IP_DATA_MOCK);
});
