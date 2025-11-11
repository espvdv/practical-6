const { sum, calculateDiscount } = require('../math.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('calculates discount for 100$ with 10%', () => {
  expect(calculateDiscount(100, 10)).toBe(90);
});
