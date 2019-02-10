import Node from './Node';

export default class SingleTag extends Node {
  constructor(name, attributes) {
    super(name, attributes);
  }

  toString() {
    const { name, getAttributesString, attributes } = this;

    const attributesString = getAttributesString(attributes);

    return `<${name}${attributesString}>`
  }
}
