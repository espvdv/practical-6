const { sum, calculateDiscount } = require('./math');

console.log('=== Running Tests ===');

const test1 = sum(1, 2);
console.log('Test 1 - sum(1, 2):', test1);
console.log('Result:', test1 === 3 ? '✅ PASS' : '❌ FAIL');

const test2 = calculateDiscount(100, 10);
console.log('Test 2 - calculateDiscount(100, 10):', test2);
console.log('Result:', test2 === 90 ? '✅ PASS' : '❌ FAIL');

if (test1 === 3 && test2 === 90) {
  console.log('🎉 All tests passed!');
} else {
  console.log('💥 Some tests failed');
  process.exit(1);
}
