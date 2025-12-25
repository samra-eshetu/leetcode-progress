function firstOccurence(haystack: string, needle: string): number {
  const haystackLength: number = haystack.length;
  const needleLength: number = needle.length;

  for (
    let startIndex: number = 0;
    startIndex <= haystackLength - needleLength;
    startIndex++
  ) {
    let isMatch: boolean = true;

    for (
      let needleIndex: number = 0;
      needleIndex < needleLength;
      needleIndex++
    ) {
      if (haystack[startIndex + needleIndex] !== needle[needleIndex]) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) {
      return startIndex;
    }
  }
  return -1;
}
