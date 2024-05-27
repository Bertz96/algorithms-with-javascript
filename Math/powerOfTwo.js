function powerOfTwo(num) {
  if (num <= 0) {
    return false;
  }

  while (num > 1) {
    if (num % 2 !== 0) {
      return false;
    }

    num = num / 2;
  }

  return true;
}

console.log(powerOfTwo(1));
console.log(powerOfTwo(3));
console.log(powerOfTwo(8));
console.log(powerOfTwo(32));
console.log(powerOfTwo(16));
console.log(powerOfTwo(12));
console.log(powerOfTwo(7));
console.log(powerOfTwo(4));
console.log(powerOfTwo(5));
