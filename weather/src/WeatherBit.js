import BaseService from './BaseService';
export default class WeatherBit extends BaseService {
  constructor(config) {
    super({ loader: config.loader });
    this.host = 'https://api.weatherbit.io/v2.0';
    this.apiKey = config.apiKey || '';
    this.serviceName = 'WeatherBit';
  }

  getServiceName() {
    return this.serviceName;
  }

  async getData(city = '') {
    const { host, load, apiKey } = this;
    const query = `current?city=${city}&key=${apiKey}`;
    const { data } = await load(host, query);
    return data;
  }
}
