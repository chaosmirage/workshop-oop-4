import buildIP from './buildIP';

export default (query) => {
  const ip = buildIP(query);
  return ip;
};
