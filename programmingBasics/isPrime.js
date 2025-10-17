
// -------------------------------
// Program: Check if a number is Prime
// Author: Kalyani Das
// -------------------------------

import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to check if a number is prime
function isPrime(num) {
    try {
        if (typeof num !== 'number' || !Number.isFinite(num) || !Number.isInteger(num)) {
            throw new TypeError('Input must be a finite integer.');
    }

    // numbers less than or equal to 1 are not prime
    if (num <= 1) return false;

    // 2 is the only even prime number
    if (num === 2) return true;

    // even numbers greater than 2 are not prime
    if (num % 2 === 0) return false;

    // check for factors from 3 to the square root of num
    const sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) {
      if (num % i === 0) return false;
    }
    return true;

    } catch (error) {
        console.error('Error in isPrime:', error.message);
        return false;
    }
}

// Ask user for input
rl.question("Enter a number to check if it's prime: ", (userInput) => {
    const number = Number(userInput);
    const result = isPrime(number);
    console.log(`${number} is ${result ? "a prime number" : "not a prime number"}.`);
    rl.close();
});
