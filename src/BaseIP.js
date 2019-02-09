import axios from 'axios';

export default class BaseIp {
  makeRequest(ip = '') {
    return axios.get(`http://ip-api.com/json/${ip}`)
      .then(({ data }) => {
        return data;
      })
      .catch((e) => {
        console.log(e);
      })
  }
}
