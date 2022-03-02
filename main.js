const add = require("./add");
const divide = require("./divide");
const multiply = require("./multiply");
const subtract = require("./subtract");

// console.log("Hello");
console.log("Addition", add(2, 3));
console.log("Division", divide(2, 3).toFixed(2));
console.log("Multiplication", multiply(2, 3));
console.log("Subtraction", subtract(2, 3));
