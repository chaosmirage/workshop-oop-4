import SingleTag from './SingleTag';
import PairTag from './PairTag';
import IsPairTag from './IsPairTag';

export default (node) => {
  const { name, attributes, content } = node;

  const Type = IsPairTag.check(node) ? PairTag : SingleTag;
  return new Type(name, attributes, content);
};
