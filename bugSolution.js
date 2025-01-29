function foo(a, b) {
  if (a === 0) {
    return 0; 
  }
  if (b < 0) {
    return Infinity; // Handle negative 'b' explicitly
  }
  return b ? foo(a - 1, b - 1) : a;
}

console.log(foo(5, 2)); // Expected: 3, Actual: 3
console.log(foo(5, 0)); // Expected: 5, Actual: 5
console.log(foo(0, 5)); // Expected: 0, Actual: 0
console.log(foo(5, 5)); // Expected: 0, Actual: 0
console.log(foo(5, -1)); // Expected: Infinity, Actual: Infinity