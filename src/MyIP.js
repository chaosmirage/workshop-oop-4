import BaseIP from './BaseIP';

export default class MyIP extends BaseIP {
  getInfo() {
    return this.makeRequest();
  }
}
