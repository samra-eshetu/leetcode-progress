function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let firstArrayIndex: number = m - 1;
  let secondArrayIndex: number = n - 1;
  let mergedPosition: number = m + n - 1;

  while (secondArrayIndex >= 0) {
    if (
      firstArrayIndex >= 0 &&
      nums1[firstArrayIndex] > nums2[secondArrayIndex]
    ) {
      nums1[mergedPosition] = nums1[firstArrayIndex];
      firstArrayIndex--;
    } else {
      nums1[mergedPosition] = nums2[secondArrayIndex];
      secondArrayIndex--;
    }
    mergedPosition--;
  }
}
