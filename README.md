# Subtle Bug in Recursive JavaScript Function

This repository demonstrates a subtle bug in a recursive JavaScript function. The function `foo` calculates a value based on two inputs, 'a' and 'b', but exhibits unexpected behavior when 'b' is negative. The bug is related to how the recursive calls handle negative decrements of b.

## Bug Description
The function `foo` is designed to handle cases where 'b' is less than 'a'. The case where 'b' is negative will not meet the intended design functionality.

## Bug Reproduction
1. Clone this repository.
2. Run `bug.js` using Node.js (or your preferred JavaScript runtime).
3. Observe the unexpected outputs when 'b' is negative.