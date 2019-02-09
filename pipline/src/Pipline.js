import fs from 'fs';

const defaultReader = () => {
  return fs.readdirSync('.');
};

export default class Pipline {
  constructor(options) {
    this.reader = options.reader || defaultReader;
  }

  readFiles() {
    const files = this.reader();
    this.files = files;
    return this;
  }

  filter() {
    const filtered = this.files.filter((file) => {
      const firstChar = file[0];
      return firstChar !== '.';
    });

    this.files = filtered;
    return this;
  }

  sort() {
    const sorted = this.files.sort();
    this.files = sorted;
    return this;
  }

  middle() {
    const middleIndex = Math.round(this.files.length / 2);
    const arrayWithMiddleItem = [this.files[middleIndex]];
    this.files = arrayWithMiddleItem;
    return this;
  }

  plural() {
    const str = this.files[0];

    const preparedStr = str.endsWith('s') ? str : `${str}s`;
    this.files = [preparedStr];
    return this;
  }

  upcase() {
    const str = this.files[0];
    const preparedStr = str.toUpperCase();
    return preparedStr;
  }
}
