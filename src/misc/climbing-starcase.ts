function climbingStarcase(num : number) : number[]{
    const numberOfWays = [1, 2];

    for (let i = 2; i <= num; i++) {
      numberOfWays[i] = numberOfWays[i - 1] + numberOfWays[i - 2];
    }
  
    return numberOfWays;
}