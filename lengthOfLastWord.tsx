function lengthOfLastWord(s: string): number {
  let endIndex: number = s.length - 1;
  while (endIndex >= 0 && s[endIndex] === " ") {
    endIndex--;
  }
  let startIndex: number = endIndex;
  while (startIndex >= 0 && s[startIndex] !== " ") {
    startIndex--;
  }
  return endIndex - startIndex;
}
