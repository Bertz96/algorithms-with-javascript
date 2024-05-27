function primeNumber(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(primeNumber(1));
console.log(primeNumber(2));
console.log(primeNumber(3));
console.log(primeNumber(5));
console.log(primeNumber(6));
console.log(primeNumber(7));
console.log(primeNumber(11));
console.log(primeNumber(15));
console.log(primeNumber(19));
