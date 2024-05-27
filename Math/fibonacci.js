function fibonacciSequence(number) {
  const firstTwoNumbers = [0, 1];

  for (let i = 2; i <= number; i++) {
    firstTwoNumbers[i] = firstTwoNumbers[i - 1] + firstTwoNumbers[i - 2];
  }

  return firstTwoNumbers;
}
