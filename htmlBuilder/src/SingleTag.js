import Node from './Node';

export default class SingleTag extends Node {
  constructor(name) {
    super(name);
  }

  toString() {
    const { name } = this;
    return `<${name}>`
  }
}
