function removeElement(nums: number[], val: number): number {
  let validElementIndex = 0;

  for (const currentElement of nums) {
    if (currentElement !== val) {
      nums[validElementIndex] = currentElement;
      validElementIndex++;
    }
  }
  return validElementIndex;
}
