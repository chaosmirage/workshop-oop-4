import buildIP from './buildIP';

export default (query) => {
  const ip = buildIP(query);

  return ip.getInfo()
    .then((res) => {
      console.log(res);
      return res;
    });
};
