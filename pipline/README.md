## How to use?

### CLI
```sh
pipline
```

### Lib
```sh
import makePipline from 'pipline';

const pipline = makePipline();

try {
  const file = pipline.readFiles()
    .filter()
    .sort()
    .middle()
    .plural()
    .upcase();

  console.log(file);
} catch (e) {
  console.log(e);
  process.exit(1);
}
```

## Setup

```sh
$ make install
```

## Run tests

```sh
$ make test
```
