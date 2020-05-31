const uniqueSum = require('./uniqueSum');

test('null array returns a result of empty array', () => {
  expect(uniqueSum(null, 1)).toStrictEqual([]);
});

test('non-array returns a result of empty array', () => {
  expect(uniqueSum('foo', 1)).toStrictEqual([]);
});

test('array with fewer than 2 items returns a result of empty array', () => {
  expect(uniqueSum([1], 1)).toStrictEqual([]);
});

test('array with two or more items returns correct indices', () => {
  expect(uniqueSum([1, 4, 8, 9], 12)).toStrictEqual([1, 2]);
});

test('array with two or more items returns correct indices even if first', () => {
  expect(uniqueSum([1, 4, 8, 9], 9)).toStrictEqual([0, 2]);
});

test('array with two or more items returns correct indices even if last', () => {
  expect(uniqueSum([1, 4, 8, 9], 13)).toStrictEqual([1, 3]);
});
