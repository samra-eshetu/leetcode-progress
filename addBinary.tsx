function addBinary(a: string, b: string ): string{
    const firstBinaryNumber: bigint = BigInt('0b' + a);
    const secondBinaryNumber: bigint = BigInt('0b' + b);
    const sum: bigint = firstBinaryNumber + secondBinaryNumber;
    return sum.toString(2);
}