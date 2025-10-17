/**
 * -------------------------------
 * Program: Tests the Calculator class methods for basic arithmetic operations.
 * Author: Kalyani Das
 * -------------------------------
 */

import assert from 'assert';
import Calculator from './calculator.js';

const calc = new Calculator();

console.log("Running Calculator Tests...\n");

try {
    // Test: Addition
    assert.strictEqual(calc.add(5, 3), 8, "Addition failed");
    console.log("✅ add(5, 3) = 8  → PASS");

    // Test: Subtraction
    assert.strictEqual(calc.subtract(10, 4), 6, "Subtraction failed");
    console.log("✅ subtract(10, 4) = 6  → PASS");

    // Test: Multiplication
    assert.strictEqual(calc.multiply(7, 6), 42, "Multiplication failed");
    console.log("✅ multiply(7, 6) = 42  → PASS");

    // Test: Division
    assert.strictEqual(calc.divide(20, 5), 4, "Division failed");
    console.log("✅ divide(20, 5) = 4  → PASS");

    // Test: Division by Zero
    try {
        calc.divide(10, 0);
        console.error("❌ divide(10, 0) did not throw an error → FAIL");
    } catch (error) {
        console.log("✅ divide(10, 0) threw error as expected → PASS");
    }
  
    console.log("\n🎉 All tests completed.");

} catch (error) {
    console.error(`❌ Test failed: ${error.message}`);
}   
