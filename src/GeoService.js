import axios from 'axios';

const makeRequest = (url) => {
  return axios.get(url)
    .then(({ data }) => {
      return data;
    })
    .catch((e) => {
      return e;
    })
}

export default class GeoService {
  constructor(config) {
    const preparedIp = config.ip || '';
    const preparedUrl = config.host || 'http://ip-api.com/json';
    this.url = `${preparedUrl}/${preparedIp}`;
    this.loader = config.loader || makeRequest;
  }

  loadData() {
    const { url, loader } = this;
    return loader(url)
      .then(res => {
        this.info = res;
      })
      .catch(e => {
        this.info = e;
      });
  }

  getUrl() {
    return this.url;
  }

  getInfo() {
    return this.info;
  }
}
