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

const geoService = getGeo({ ip: '127.0.0.1' });

try {
  await geoService.loadData();
  console.log(geoService.getInfo());
} catch (e) {
  console.log(e);
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
