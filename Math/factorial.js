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

console.log("Factorial de 1: ", fibonacciSequence(1));
console.log("Factorial de 2: ", fibonacciSequence(2));
console.log("Factorial de 3: ", fibonacciSequence(3));
console.log("Factorial de 4: ", fibonacciSequence(4));
console.log("Factorial de 5: ", fibonacciSequence(5));
console.log("Factorial de 6: ", fibonacciSequence(6));
console.log("Factorial de 7: ", fibonacciSequence(7));
console.log("Factorial de 8: ", fibonacciSequence(8));
console.log("Factorial de 9: ", fibonacciSequence(9));
console.log("Factorial de 10: ", fibonacciSequence(10));
