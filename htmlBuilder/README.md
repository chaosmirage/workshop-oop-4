## How to use?

```sh
import buildHtml from 'buildHtml';

const PairTag = {
  name: 'div',
  attributes: { class: 'row' },
  content: 'content',
};

const html = htmlBuilder(PairTag);
html.toString() -> <div class="row">content</div>

const SingleTag = {
  name: 'hr',
};

const html = htmlBuilder(SingleTag);
html.toString() -> <hr>
```

## Setup

```sh
$ make install
```

## Run tests

```sh
$ make test
```
