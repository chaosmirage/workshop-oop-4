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
const info = await ip.getInfo(87.240.190.67);
```

## Setup

```sh
$ make install
```

## Run tests

```sh
$ make test
```
