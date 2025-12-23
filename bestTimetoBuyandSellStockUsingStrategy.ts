function maxProfitFromTrading(prices:number[], strategy:number[], k:number): number{
    const n = prices.length;
    const prefix: number[] =new Array<number>(n+1).fill(0);
    for (let i=0; i<n; i++){
        prefix[i+1] = prefix[i] + prices[i]*strategy[i];
    }
    let ans:number = prefix[n];
    let modified:number = prices.slice(k/2,k).reduce((curr, prev)=> curr+prev, 0);

    ans = Math.max(ans, prefix[n]- prefix[k]+modified);
    for(let i=1; i+k<=n; i++){
        modified+= prices[i+k-1]-prices[i+k/2-1];
        ans = Math.max(ans, prefix[n]- prefix[i+k]+ prefix[i]+modified);

    }
    return ans;
};