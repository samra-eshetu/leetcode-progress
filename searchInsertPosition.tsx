function searchInsert(nums: number[], target: number): number {
  const n: number = nums.length;
  let left: number = 0;
  let right: number = n - 1;
  let firstTrueIndex: number = -1;

  while (left <= right) {
    const mid: number = Math.floor(left + right); //2;
    if (nums[mid] >= target) {
      firstTrueIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return firstTrueIndex !== -1 ? firstTrueIndex : n;
}
