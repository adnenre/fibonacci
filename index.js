"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
function fibonacci(n) {
    // Create an object to store previously calculated values
    var memo = {};
    // Initialize the first two numbers in the sequence
    var a = 0;
    var b = 1;
    var sequence = [a, b];
    if (n < 0) {
        throw new Error('n must be positive !');
    }
    if (n == 0) {
        return [0];
    }
    if (n == 1) {
        return [0, 1];
    }
    // Use a loop to iterate through the numbers up to n
    for (var i = 0; i <= n - 2; i++) {
        // Check if the current number is stored in the memo object
        if (memo[i]) {
            // If it is, retrieve the value from the memo object and append it to the sequence
            b = memo[i];
        }
        else {
            // If it isn't, compute the next number in the sequence by adding the previous two numbers
            // and store it in the memo object
            memo[i] = a + b;
            a = b;
            b = memo[i];
        }
    }
    sequence = __spreadArray(__spreadArray([], sequence, true), Object.values(memo), true);
    // Return the list of numbers as the Fibonacci sequence
    return sequence;
}
exports["default"] = fibonacci;
