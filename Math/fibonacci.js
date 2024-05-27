function fibonacciSequence(number) {
  const firstTwoNumbers = [0, 1];

  for (let i = 2; i <= number; i++) {
    firstTwoNumbers[i] = firstTwoNumbers[i - 1] + firstTwoNumbers[i - 2];
  }

  return firstTwoNumbers;
}

console.log("Fibonacci de 1: ", fibonacciSequence(1));
console.log("Fibonacci de 2: ", fibonacciSequence(2));
console.log("Fibonacci de 3: ", fibonacciSequence(3));
console.log("Fibonacci de 4: ", fibonacciSequence(4));
console.log("Fibonacci de 5: ", fibonacciSequence(5));
console.log("Fibonacci de 6: ", fibonacciSequence(6));
console.log("Fibonacci de 7: ", fibonacciSequence(7));
console.log("Fibonacci de 8: ", fibonacciSequence(8));
console.log("Fibonacci de 9: ", fibonacciSequence(9));
console.log("Fibonacci de 10: ", fibonacciSequence(10));
