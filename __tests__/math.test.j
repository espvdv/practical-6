const { sum, calculateDiscount } = require('../math');

console.log('Running tests...');

const result1 = sum(1, 2);
console.log('Test 1 - sum(1, 2):', result1 === 3 ? 'PASS' : 'FAIL');

const result2 = calculateDiscount(100, 10);
console.log('Test 2 - calculateDiscount(100, 10):', result2 === 90 ? 'PASS' : 'FAIL');

if (result1 !== 3 || result2 !== 90) {
  process.exit(1);
}
