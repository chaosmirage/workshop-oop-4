import BaseService from './BaseService';
export default class WeatherBit extends BaseService {
  constructor(config) {
    super({ loader: config.loader });
    this.host = 'https://api.weatherbit.io/v2.0';
    this.apiKey = '3d2a467351dd4b3c804f184f9c695776';
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
