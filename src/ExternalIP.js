import BaseIP from './BaseIP';

export default class ExternalIP extends BaseIP {
  getInfo(ip) {
    return this.makeRequest(ip);
  }
}
