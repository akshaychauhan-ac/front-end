// Hoisting

// JavaScript only hoists declarations, not initializations. 
// If a variable is declared and initialized after using it, the value will be undefined. 
// Classes are not hoisted.
// Variables which are assigned without a var declaration are considered to be global variables

// Function declarations hoist the function definitions. Hence, functions declaration can be used before they are declared.
// Function expressions in JavaScript are not hoisted.

// Question
console.log(y);
y = 1;
-------------------
console.log(y);
var y = 2;
-------------------
y = 3;
console.log(y);
var y;

// Answer
console.log(y); // ReferenceError: y is not defined
y = 1;
-------------------
var y = undefined;
console.log(y); //undefined
y = 2;
-------------------
var y = undefined;
y = 3;
console.log(y); // 3
