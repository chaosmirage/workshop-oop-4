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
getGeo options:
```
loader,
```

```
import getGeo from 'get-geo';

const geoService = getGeo();

try {
  const { data } = await geoService.loadData(input);
  console.log(data);
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
