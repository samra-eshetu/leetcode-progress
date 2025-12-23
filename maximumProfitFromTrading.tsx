function maxProfit(n: number, present: number[], future: number[], hierarchy: number[][], budget: number): number {
    const INF = -1e15;
    const tree: number[][] = Array.from({ length: n }, () => []);
    const indeg = Array(n).fill(0);

    for (const [u, v] of hierarchy) {
        tree[u - 1].push(v - 1);
        indeg[v - 1]++;
    }

    const root = indeg.findIndex(x => x === 0);
    const capability = Array(n).fill(0);

    function cap(u: number): number {
        let sum = present[u];
        for (const v of tree[u]) sum += cap(v);
        capability[u] = Math.min(budget, sum);
        return sum;
    }

    cap(root);

    function merge(a: number[], b: number[]): number[] {
        const total = Math.min(budget, a.length + b.length - 2);
        const c = Array(total + 1).fill(INF);

        for (let i = 0; i < a.length; i++) {
            if (a[i] === INF) 
                continue;
            for (let j = 0; j < b.length && i + j <= total; j++) {
                if (b[j] === INF) 
                    continue;
                c[i + j] = Math.max(c[i + j], a[i] + b[j]);
            }
        }
        return c;
    }

    const dp0: number[][] = Array(n);
    const dp1: number[][] = Array(n);

    function dfs(u: number): void {
        for (const v of tree[u]) 
            dfs(v);

        let skip = Array(capability[u] + 1).fill(INF);
        let base = Array(capability[u] + 1).fill(INF);
        skip[0] = base[0] = 0;

        for (const v of tree[u]) {
            skip = merge(skip, dp0[v]);
            base = merge(base, dp1[v]);
        }

        function compute(parentBought: number): number[] {
            const price = parentBought ? Math.floor(present[u] / 2) : present[u];
            const profit = future[u] - price;
            const res = [...skip];
            for (let b = price; b < res.length; b++) {
                if (base[b - price] !== INF) {
                    res[b] = Math.max(res[b], base[b - price] + profit);
                }
            }
            return res;
        }

        dp0[u] = compute(0);
        dp1[u] = compute(1);
    }

    dfs(root);
    return Math.max(...dp0[root]);
};