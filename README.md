## How to use?

### CLI

Get your ip info

```sh
get-geo
```

Get external ip info

```sh
get-geo [external ip]
```

### Lib

```
import getGeo from 'get-geo';

const ip = getGeo();
ip.getInfo(87.240.190.67)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
```

## Setup

```sh
$ make install
```

## Run tests

```sh
$ make test
```
