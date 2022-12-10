
function fib2(index) {
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
}

function fib3(n) {
  const memo = new Map();

  const dp = () => {
    if (i === 0) return 0;
    if (i === 1) return 1;

    if (memo.has(i)) {
      return memo.get(i);
    }

    const result = dp(i - 1) + dp(i - 2);
    memo.set(i, result);
    return result;
  };

  return dp(n);
}

function fibonacci(n) {
  // Create an object to store previously calculated values
  const memo = {};
  // Initialize the first two numbers in the sequence
  let a = 0;
  let b = 1;
  let sequence = [a, b];
  if (n < 0) {
    throw new Error("n must be positive !");
  }
  if (n == 0) {
    return [0];
  }
  if (n == 1) {
    return [0, 1];
  }
  // Use a loop to iterate through the numbers up to n
  for (let i = 0; i <= n - 2; i++) {
    // Check if the current number is stored in the memo object
    if (memo[i]) {
      // If it is, retrieve the value from the memo object and append it to the sequence
      b = memo[i];
    } else {
      // If it isn't, compute the next number in the sequence by adding the previous two numbers
      // and store it in the memo object
      memo[i] = a + b;
      a = b;
      b = memo[i];
    }
  }
  sequence = [...sequence, ...Object.values(memo)];
  // Return the list of numbers as the Fibonacci sequence
  return sequence;
}
