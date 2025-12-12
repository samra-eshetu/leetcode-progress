function longestCommonPrefix(strs: string[]): string { 
    const minimumLength: number = strs.reduce((acc:number, str:string)=> (Math.min(acc, str.length)), Infinity);// so we will get minimum length=4

    for(let prefixLength:number = minimumLength, prefixLength>0; prefixLength--){
        const candidatePrefix:string = strs[0].slice(0, prefixLength);
        const isCommonPrefix: boolean = strs.every((str:string)=> str.slice(0, prefixLength)===candidatePrefix);

        if(isCommonPrefix){
            return candidatePrefix;
        }
    };
return " ";


};