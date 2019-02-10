import axios from 'axios';

export default async (host, query) => {
  const url = `${host}/${query}`;
  const data = axios.get(url);
  return data;
};
