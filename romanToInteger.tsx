function romanToInt(s:string): number{
    let sum = 0;
    let prevValue= 0;
    const value : {[key:string] : number}={
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    };

    for (let i = 0; i < s.length; i++){
        const currentValue = value[s[i]];
        sum += currentValue > prevValue ? currentValue - 2*prevValue : currentValue;
        prevValue = currentValue;
    }
return sum;
};