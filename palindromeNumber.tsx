function isPalindrome(x:number):boolean{
    const original:string = x.toString();
    const reverted:string = original.split('').reverse().join('');
    return original===reverted;
};