function fibonacciSequence(number) {
  let factorialOfN = 1;

  if (number <= 0) {
    return 1;
  }

  for (let i = 1; i <= number; i++) {
    factorialOfN *= i;
  }

  return factorialOfN;
}
