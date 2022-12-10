
function fib(n: number): number {
    const memo = [0, 1];
    for (let i = 2; i <= n; i++) {
        memo[i % 2] = memo[i % 2] + memo[(i - 1) % 2];
    };
    return memo[n % 2];
};

function fib2(index: number): number {
    if (index <= 2) {
        return index === 0 ? 0 : 1;
    }

    let curr = 0;
    let next = 1;
    let sum = curr + next;

    for (let i = 2; i < index; i++) {
        curr = next;
        next = sum;
        sum = curr + next;
    }

    return sum;
};

function fib3(n: number): number {
    const memo = new Map();
    
    const dp = (i:number) :number=> {
        if (i === 0) return 0;
        if (i === 1) return 1;
        
        if (memo.has(i)) {
            return memo.get(i);
        }
        
        const result = dp(i-1) + dp(i-2);
        memo.set(i, result);
        return result;
    }
    
    
    return dp(n);
};