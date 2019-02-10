export default class Node {
  constructor(name = '', attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  getAttributesString() {
    const { attributes } = this;

    const string = Object.keys(attributes)
      .reduce((acc, key) => {
        return `${acc} ${key}="${attributes[key]}"`
      }, '');

    return string;
  }

  isShort() {
    const string = this.toString();
    return string.length < 10;
  }
}
