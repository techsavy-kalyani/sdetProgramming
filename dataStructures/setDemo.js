/**
 * -------------------------------
 * Program: Demonstrate uniqueness using Set in JavaScript
 * Author: Kalyani Das
 * -------------------------------
 */

// Function to generate random 10-digit mobile numbers
function generateRandomMobile() {
  const startDigit = ['9', '8', '7'][Math.floor(Math.random() * 3)];
  const remainingDigits = Math.floor(100000000 + Math.random() * 900000000); // 9 digits
  return startDigit + remainingDigits.toString();
}

// Create a new Set to store unique mobile numbers
const mobileNumbers = new Set();

// Add 10 random mobile numbers
for (let i = 0; i < 10; i++) {
  mobileNumbers.add(generateRandomMobile());
}

console.log("Initial Set of Mobile Numbers:");
console.log(mobileNumbers);
console.log(`\nInitial size: ${mobileNumbers.size}`);

// Add some duplicates
const duplicates = Array.from(mobileNumbers).slice(0, 3); // pick 3 existing numbers
duplicates.forEach(num => mobileNumbers.add(num)); // adding duplicates again


console.log("\nAfter adding duplicates...");
console.log(mobileNumbers);
console.log(`\nFinal size after duplicates: ${mobileNumbers.size}`);
console.log("\n🔍 Observation: Even after adding duplicate numbers, the Set size remains the same — demonstrating its uniqueness property.");
