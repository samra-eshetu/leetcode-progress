function longestCommonPrefix(strs: string[]): string {
    const minLength: number = strs.reduce(
        (currentMin: number, str: string) => Math.min(currentMin, str.length), 
        Infinity
    );
  
    // Try prefixes from longest to shortest possible length
    for (let prefixLength: number = minLength; prefixLength > 0; prefixLength--) {
        // Extract the candidate prefix from the first string
        const candidatePrefix: string = strs[0].slice(0, prefixLength);
      
        // Check if all strings start with this candidate prefix
        const isCommonPrefix: boolean = strs.every(
            (str: string) => str.slice(0, prefixLength) === candidatePrefix
        );
      
        if (isCommonPrefix) {
            return candidatePrefix;
        }
    }
  
    // No common prefix found
    return '';
};