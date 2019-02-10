import makeRequest from './utils/makeRequest';

export default class BaseService {
  constructor(config) {
    this.load = config.loader || makeRequest;
  }
}
