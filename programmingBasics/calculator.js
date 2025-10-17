/**
 * -------------------------------
 * Program: 
 * 
 * Calculator Class encapsulates basic arithmetic operations (addition, subtraction, multiplication, and division) as methods
 * The divide method includes error handling for division by zero
 * This class can be used to perform calculations by creating an instance and calling its methods.
 * 
 * Author: Kalyani Das
 * -------------------------------
 */

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
  }
}

export default Calculator;
