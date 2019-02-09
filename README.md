## How to use?

Get your ip info

```sh
get-geo
```

Get external ip info

```sh
get-geo [external ip]
```

```
import getGeo from 'get-geo';

const ip = getGeo();
ip.getInfo()
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
