import makeRequest from './makeRequest';

export default class MetaWeather {
  constructor(config) {
    this.host = 'https://www.metaweather.com/api/location';
    this.serviceName = 'MetaWeather';
    this.load = config.loader || makeRequest;
  }

  getServiceName() {
    return this.serviceName;
  }

  async getData(city = '') {
    const { host, load } = this;

    const cityIdQuery = `search/?query=${city}`;
    const { data: cityList } = await load(host, cityIdQuery);
    const cityId = cityList[0].woeid;
    const { data } = await load(host, cityId);
    return data;
  }
}
