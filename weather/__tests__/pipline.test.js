import makePipline from '../src/makePipline';

test('Get prepared file names', () => {
  const reader = () => {
    return [
      'f001',
      '.e002',
      'a003',
      '.test004',
      'd004',
    ];
  };

  const RESULT = 'F001S';

  const pipline = makePipline({ reader });

  const file = pipline.readFiles()
    .filter()
    .sort()
    .middle()
    .plural()
    .upcase()
    .toString();

  expect(file).toBe(RESULT);
});
