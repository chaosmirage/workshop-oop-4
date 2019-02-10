import htmlBuilder from '../src';

test('PairTag created', async () => {
  const RESULT = '<div class="row">content</div>';

  const node = {
    name: 'div',
    attributes: { class: 'row' },
    content: 'content',
  };

  const html = htmlBuilder(node);
  expect(html.toString()).toBe(RESULT);
});

test('SingleTag created', async () => {
  const RESULT = '<hr>';

  const node = {
    name: 'hr',
  };

  const html = htmlBuilder(node);
  expect(html.toString()).toBe(RESULT);
});
