import BaseIP from './BaseIP';

export default class ExternalIP extends BaseIP {
  constructor(ip) {
    super(ip);
    this.ip = ip;
  }

  getInfo() {
    return this.makeRequest(this.ip);
  }
}
