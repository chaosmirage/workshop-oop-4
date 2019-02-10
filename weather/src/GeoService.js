import axios from 'axios';

const makeRequest = async (host, ip) => {
  const url = `${host}/${ip}`;
  const data = axios.get(url);
  return data;
};

export default class GeoService {
  constructor(config) {
    this.host = 'http://ip-api.com/json';
    this.loader = config.loader || makeRequest;
  }

  async loadData(ip = '') {
    const { host, loader } = this;

    const data = await loader(host, ip);
    return data;
  }
}
