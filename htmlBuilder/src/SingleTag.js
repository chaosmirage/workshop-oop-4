import Node from './Node';

export default class SingleTag extends Node {
  constructor(name, attributes) {
    super(name, attributes);
  }

  toString() {
    const { name } = this;

    const attributesString = this.getAttributesString();

    return `<${name}${attributesString}>`
  }
}
