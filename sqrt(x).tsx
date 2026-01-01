function mySqrt(x: number): number {
  if (x === 0) {
    return 0;
  }

  let left: number = 1;
  let right: number = x;
  let firstTrueIndex = -1;

  while (left <= right) {
    const mid: number = Math.floor((left + right) / 2);
    if (mid > Math.floor(x / mid)) {
      firstTrueIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  if (firstTrueIndex === -1) {
    return x;
  }
  return firstTrueIndex - 1;
}
