"use strict";
exports.__esModule = true;
function fibonacci(n) {
    var memo = [0, 1];
    if (n < 0) {
        throw new Error("n must be positive !");
    }
    if (n == 0) {
        return [0];
    }
    if (n == 1) {
        return memo;
    }
    var arr = [0, 1];
    for (var i = 2; i <= n; i++) {
        memo[i % 2] = memo[i % 2] + memo[(i - 1) % 2];
        arr.push(memo[i % 2]);
    }
    return arr;
}
exports["default"] = fibonacci;
