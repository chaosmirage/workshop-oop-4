import Node from './Node';

export default class PairTag extends Node {
  constructor(name, attributes = {}, content = '') {
    super(name);
    this.attributes = attributes;
    this.content = content;
  }

  toString() {
    const { name, attributes, content } = this;

    const preparedAttributes = Object.keys(attributes)
      .reduce((acc, key) => {
        return `${acc} ${key}="${attributes[key]}"`
      }, '');

    return `<${name}${preparedAttributes}>${content}</${name}>`

  }
}
