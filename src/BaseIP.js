import axios from 'axios';

export default class BaseIp {
  makeRequest(query = '') {
    const url = `http://ip-api.com/json/${query}`;

    return axios.get(url)
      .then(({ data }) => {
        return data;
      })
      .catch((e) => {
        return e;
      })
  }
}
