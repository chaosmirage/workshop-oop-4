export default class Node {
  constructor(name = '', attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  getAttributesString(attributes) {
    const string = Object.keys(attributes)
      .reduce((acc, key) => {
        return `${acc} ${key}="${attributes[key]}"`
      }, '');

    return string;
  }
}
