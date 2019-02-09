import axios from 'axios';

const makeRequest = (host, ip) => {
  const url = `${host}/${ip}`;
  return axios.get(url)
    .then(({ data }) => {
      return data;
    })
    .catch((e) => {
      return e;
    });
};

export default class GeoService {
  constructor(config) {
    this.host = 'http://ip-api.com/json';
    this.loader = config.loader || makeRequest;
  }

  loadData(ip = '') {
    const { host, loader } = this;

    return loader(host, ip)
      .then((res) => {
        return res;
      })
      .catch((e) => {
        return e;
      });
  }
}
