function sum(a, b) {
  return a + b;
}

function calculateDiscount(price, discount) {
  return price - (price * discount) / 100;
}

module.exports = { sum, calculateDiscount };
