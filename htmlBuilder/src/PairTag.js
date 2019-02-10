import Node from './Node';

export default class PairTag extends Node {
  constructor(name, attributes = {}, content = '') {
    super(name, attributes);
    this.content = content;
  }

  toString() {
    const { name, content, getAttributesString, attributes } = this;
    const attributesString = getAttributesString(attributes);

    return `<${name}${attributesString}>${content}</${name}>`
  }
}
