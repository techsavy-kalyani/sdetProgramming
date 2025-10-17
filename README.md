# sdetProgramming

**📘 Programming Fundamentals & Automation Concepts – Assignment**

**Overview**  
This assignment is designed to strengthen foundational programming skills, apply core data structure concepts, and demonstrate object-oriented design and analytical thinking.  

Each section below corresponds to a specific topic covered in the module.  

**🧮 1. Programming Basics**

**🧠 Task 1: Prime Number Function**  
**File:** ./programmingBasics/isPrime.js

**Purpose:** Build a JavaScript function isPrime(num) that takes a number and returns true if it's a prime number, and false otherwise

**Sample Output:**  
console.log(isPrime(7)); // true  
console.log(isPrime(8)); // false  


**⚙️ Task 2: Calculator Class**  
**File:** .\programmingBasics\calculator.js  

**Purpose:** Implements a reusable arithmetic class.  

| Method           | Description        | Example                   |
| ---------------- | ------------------ | ------------------------- |
| `add(a, b)`      | Adds two numbers   | `calc.add(5,3) → 8`       |
| `subtract(a, b)` | Subtracts b from a | `calc.subtract(10,4) → 6` |
| `multiply(a, b)` | Multiplies a and b | `calc.multiply(7,6) → 42` |
| `divide(a, b)`   | Divides a by b     | `calc.divide(20,5) → 4`   |

  
**File:** ./programmingBasics/calculator.test.js  
**Purpose:** Unit tests for the Calculator class  

**Sample Output:**
Running Calculator Tests...

✅ add(5, 3) = 8  → PASS  
✅ subtract(10, 4) = 6  → PASS  
✅ multiply(7, 6) = 42  → PASS  
✅ divide(20, 5) = 4  → PASS  
✅ divide(10, 0) threw error as expected → PASS  

🎉 All tests completed.


**📱 2. Data Structures**

**File:** ./dataStructures/SetDemo.js  
**Purpose:** Create a Set of 10 random mobile numbers.  
        Add a few duplicates.  
        Print the final size of the Set to demonstrate that it only stores unique values.  

**Sample Output:**  
Initial size: 10  
Final size after duplicates: 10  

🔍 Observation: Even after adding duplicate numbers, the Set size remains the same — demonstrating its uniqueness property.  


**🧱 3. Object-Oriented Design**

**File:** ./objectOrientDesign/LoginPagePlaywright.js  
       ./objectOrientDesign/LoginPageSelenium.js  

**Purpose:** Build a simple Page Object Model (POM) class for a fictional login page using Playwright and Selenium.  
    A constructor() initializes sample locators like usernameInput, passwordInput, and loginButton.  
    A login(username, password) method that simulates login action (e.g., prints credentials or mock behavior).  


**💭 4. Critical Thinking & Analysis**

**File:** AutomationLanguagesComparison.md  

**Purpose:** A short essay (200–300 words) or create a short presentation comparing JavaScript vs. Python vs. Java for automation.
        Pros & cons of each language. A justified preference based on your professional context (e.g., web automation, backend testing, or CI/CD integration).  
