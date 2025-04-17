// Basic example of a function and a test case

// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Example test case
console.log("Test Case 1: add(2, 3) === 5");
console.log(add(2, 3) === 5 ? "Passed" : "Failed");
console.log("Second test, this is a message writed from remote");


// Additional function to subtract two numbers
function subtract(a, b) {
  return a - b;
}

// Example test case for subtract
console.log("Test Case 2: subtract(5, 2) === 3");
console.log(subtract(5, 2) === 3 ? "Passed" : "Failed");

// Additional function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Example test case for multiply
console.log("Test Case 3: multiply(4, 3) === 12");
console.log(multiply(4, 3) === 12 ? "Passed" : "Failed");