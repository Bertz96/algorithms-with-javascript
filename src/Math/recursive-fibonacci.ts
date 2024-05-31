function recursiveFibonacci(number:number) : number{
  if (number < 2) return number;

  return recursiveFibonacci(number - 1) + recursiveFibonacci(number - 2);
}

//big-o (2 ^ n)
