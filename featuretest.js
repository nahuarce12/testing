// featuretest.js

// Example function to test a feature
function addNumbers(a, b) {
  return a + b;
}

// Example usage
const result = addNumbers(5, 3);
console.log(`The result is: ${result}`);

// Export the function for testing
module.exports = { addNumbers };