## How to use?
You can choose one of weather service: MetaWeather, WeatherBit

### CLI
```sh
weather moscow -s MetaWeather
```

### Lib
options:
```
serviceName,
customServices,
loader,
```

```sh
import makeWeatherService from 'weather';

const weatherService = makeWeatherService({ serviceName });
const data = await weatherService.getData('moscow');
```

## Setup

```sh
$ make install
```

## Run tests

```sh
$ make test
```
