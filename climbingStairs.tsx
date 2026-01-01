function climbStairs(n: number): number {
  let previousWays: number = 1;
  let currentWays: number = 1;

  for (let step: number = 1; step < n; step++) {
    [previousWays, currentWays] = [currentWays, previousWays + currentWays];
  }
  return currentWays;
}
