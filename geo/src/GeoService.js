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

  loadData(customUrl) {
    const { url, loader } = this;
    const preparedUrl = customUrl || url;

    return loader(preparedUrl)
      .then(res => {
        this.info = res;
      })
      .catch(e => {
        return e;
      });
  }

  getUrl() {
    return this.url;
  }

  getInfo() {
    return this.info;
  }
}
