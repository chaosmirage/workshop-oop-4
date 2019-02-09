import fs from 'fs';

const defaultReader = () => {
  return fs.readdirSync('.');
};

export default class Pipline {
  constructor(options) {
    this.reader = options.reader || defaultReader;
    this.files = options.files || [];
  }

  readFiles() {
    const files = this.reader();
    return new Pipline({ files });
  }

  filter() {
    const filtered = this.files.filter((file) => {
      const firstChar = file[0];
      return firstChar !== '.';
    });

    return new Pipline({ files: filtered });
  }

  sort() {
    const sorted = this.files.sort();
    return new Pipline({ files: sorted });
  }

  middle() {
    const middleIndex = Math.round(this.files.length / 2);
    const arrayWithMiddleItem = [this.files[middleIndex]];
    return new Pipline({ files: arrayWithMiddleItem });
  }

  plural() {
    const str = this.files[0];

    const preparedStr = str.endsWith('s') ? str : `${str}s`;
    return new Pipline({ files: [preparedStr] });
  }

  upcase() {
    const str = this.files[0];
    const preparedStr = str.toUpperCase();
    return new Pipline({ files: [preparedStr] });
  }

  toString() {
    return this.files[0];
  }
}
