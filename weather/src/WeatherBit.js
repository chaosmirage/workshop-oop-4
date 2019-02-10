import makeRequest from './makeRequest';

export default class WeatherBit {
  constructor(config) {
    this.host = 'https://api.weatherbit.io/v2.0';
    this.apiKey = '3d2a467351dd4b3c804f184f9c695776';
    this.serviceName = 'WeatherBit';
    this.load = config.loader || makeRequest;
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
