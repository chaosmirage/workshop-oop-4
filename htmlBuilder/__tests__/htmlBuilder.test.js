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
  const RESULT = '<hr class="test">';

  const node = {
    name: 'hr',
    attributes: { class: 'test' },
  };

  const html = htmlBuilder(node);
  expect(html.toString()).toBe(RESULT);
});
