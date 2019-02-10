import Node from './Node';

export default class PairTag extends Node {
  constructor(name, attributes = {}, content = '') {
    super(name, attributes);
    this.content = content;
  }

  toString() {
    const { name, content } = this;
    const attributesString = this.getAttributesString();

    return `<${name}${attributesString}>${content}</${name}>`
  }
}
