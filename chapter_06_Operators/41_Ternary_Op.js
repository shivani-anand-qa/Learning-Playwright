// Ternary Operator: condition ? valueIfTrue : valueIfFalse
// It is a shorthand for if-else

let age = 20;

// Using if-else
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Same logic using ternary operator
let result = age >= 18 ? "Adult" : "Minor";
console.log(result); // Adult

// Example 2: Check if a number is even or odd
let num = 7;
let evenOdd = num % 2 === 0 ? "Even" : "Odd";
console.log(evenOdd); // Odd

// Example 3: Nested ternary (use sparingly — hard to read)
let marks = 75;
let grade = marks >= 90 ? "A" : marks >= 60 ? "B" : "C";
console.log(grade); // B
