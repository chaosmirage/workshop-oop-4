import BaseService from './BaseService';
export default class MetaWeather extends BaseService{
  constructor(config) {
    super({ loader: config.loader });
    this.host = 'https://www.metaweather.com/api/location';
    this.serviceName = 'MetaWeather';
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
