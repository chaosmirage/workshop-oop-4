import * as axios from 'axios';
import {
  MY_IP_DATA_MOCK,
  EXTERNAL_IP_DATA_MOCK,
} from '../src/data.mock';
import ExternalIP from '../src/ExternalIP';
import MyIP from '../src/MyIP';
import buildIP from '../src/buildIP';

jest.mock('axios');

test('Get info', () => {
  axios.get.mockImplementation(() => Promise.resolve({ data: MY_IP_DATA_MOCK }));

  const ip = buildIP();

  return ip.getInfo()
    .then((res) => {
      expect(res).toBe(MY_IP_DATA_MOCK);
    });
});

test('Get my ip', () => {
  const ip = buildIP();
  expect(ip).toBeInstanceOf(MyIP);
});

test('Get external ip', () => {
  const ip = buildIP(EXTERNAL_IP_DATA_MOCK.query);
  expect(ip).toBeInstanceOf(ExternalIP);
});
