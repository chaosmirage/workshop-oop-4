import axios from 'axios';

export default class BaseIp {
  makeRequest(ip = '') {
    const url = `http://ip-api.com/json/${ip}`;

    return axios.get(url)
      .then(({ data }) => {
        return data;
      })
      .catch((e) => {
        console.log(e);
      })
  }
}
