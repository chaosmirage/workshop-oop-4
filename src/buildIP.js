import MyIP from './MyIP';
import ExternalIP from './ExternalIP';

export default (ip) => {
  if (ip) {
    return new ExternalIP(ip);
  }

  return new MyIP();
};
