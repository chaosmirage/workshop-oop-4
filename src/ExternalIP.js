import BaseIP from './BaseIP';

export default class ExternalIP extends BaseIP {
  constructor(query) {
    super(query);
    this.query = query;
  }

  getInfo() {
    return this.makeRequest(this.query);
  }
}
