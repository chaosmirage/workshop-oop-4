import makeRequest from './makeRequest';

export default class MetaWeather {
  constructor(config) {
    this.host = 'https://www.metaweather.com/api/location';
    this.serviceName = 'MetaWeather';
    this.loader = config.loader || makeRequest;
  }

  getServiceName() {
    return this.serviceName;
  }

  async getData(city = '') {
    const { host, loader } = this;

    const cityIdQuery = `search/?query=${city}`;
    const { data: cityList } = await loader(host, cityIdQuery);
    const cityId = cityList[0].woeid;
    const { data } = await loader(host, cityId);
    return data;
  }
}
