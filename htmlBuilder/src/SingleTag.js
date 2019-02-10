import Node from './Node';

export default class PairTag extends Node {
  constructor(name, attributes, content) {
    super(name);
  }

  toString() {
    const { name } = this;
    return `<${name}>`
  }
}
