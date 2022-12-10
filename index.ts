function fibonacci(n: number) {
  const memo: number[] = [0, 1];
 
  if (n < 0) {
    throw new Error("n must be positive !");
  }
  if (n == 0) {
    return [0];
  }
  if (n == 1) {
    return memo;
  }
  const arr: number[] = [0, 1];
  for (let i = 2; i <= n; i++) {
    memo[i % 2] = memo[i % 2] + memo[(i - 1) % 2];
    arr.push(memo[i % 2]);
  }
  return arr;
}

export default fibonacci;
