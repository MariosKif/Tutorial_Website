---
title: "JavaScript Functions"
description: "Learn how to create and use functions in JavaScript, including arrow functions, parameters, and scope."
difficulty: "intermediate"
readTime: "15 min read"
category: "JavaScript"
tags: ["javascript", "functions", "arrow-functions", "parameters", "scope"]
published: true
date: 2024-01-22
---

# JavaScript Functions

Functions are reusable blocks of code that perform specific tasks. They're fundamental to JavaScript programming and help organize code into manageable pieces.

## Function Declarations

The most common way to create a function:

```javascript
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("John")); // "Hello, John!"
```

## Function Expressions

Functions can be assigned to variables:

```javascript
const greet = function(name) {
  return "Hello, " + name + "!";
};

console.log(greet("Jane")); // "Hello, Jane!"
```

## Arrow Functions (ES6)

A more concise syntax for function expressions:

```javascript
const greet = (name) => {
  return "Hello, " + name + "!";
};

// Even more concise for single expressions
const greet = name => "Hello, " + name + "!";

// Multiple parameters
const add = (a, b) => a + b;

// No parameters
const sayHello = () => "Hello, World!";
```

## Parameters and Arguments

### Default Parameters
```javascript
function greet(name = "World") {
  return "Hello, " + name + "!";
}

console.log(greet()); // "Hello, World!"
console.log(greet("John")); // "Hello, John!"
```

### Rest Parameters
```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

### Destructuring Parameters
```javascript
function greetUser({ name, age }) {
  return `Hello, ${name}! You are ${age} years old.`;
}

const user = { name: "John", age: 25 };
console.log(greetUser(user)); // "Hello, John! You are 25 years old."
```

## Return Values

Functions can return values:

```javascript
function multiply(a, b) {
  return a * b;
}

const result = multiply(3, 4);
console.log(result); // 12
```

Functions without a return statement return `undefined`:

```javascript
function doSomething() {
  console.log("Doing something...");
  // No return statement
}

const result = doSomething(); // "Doing something..."
console.log(result); // undefined
```

## Function Scope

Functions create their own scope:

```javascript
let globalVar = "I'm global";

function myFunction() {
  let localVar = "I'm local";
  console.log(globalVar); // Can access global variables
  console.log(localVar);  // Can access local variables
}

myFunction();
// console.log(localVar); // Error: localVar is not defined
```

## Higher-Order Functions

Functions that take other functions as parameters or return functions:

```javascript
// Function that takes another function as parameter
function processArray(array, processor) {
  return array.map(processor);
}

const numbers = [1, 2, 3, 4, 5];
const doubled = processArray(numbers, x => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Function that returns another function
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

## Immediately Invoked Function Expressions (IIFE)

Functions that are executed immediately:

```javascript
(function() {
  console.log("This runs immediately!");
})();

// With parameters
(function(name) {
  console.log("Hello, " + name + "!");
})("John");
```

## Function Hoisting

Function declarations are hoisted (can be called before they're defined):

```javascript
console.log(greet("John")); // "Hello, John!" (works!)

function greet(name) {
  return "Hello, " + name + "!";
}
```

Function expressions are not hoisted:

```javascript
console.log(greet("John")); // Error: greet is not a function

const greet = function(name) {
  return "Hello, " + name + "!";
};
```

## Callback Functions

Functions passed as arguments to other functions:

```javascript
function processUserData(user, callback) {
  console.log("Processing user:", user.name);
  callback(user);
}

function displayUser(user) {
  console.log(`User: ${user.name}, Age: ${user.age}`);
}

const user = { name: "John", age: 25 };
processUserData(user, displayUser);
```

## Common Array Methods with Functions

```javascript
const numbers = [1, 2, 3, 4, 5];

// map - transform each element
const doubled = numbers.map(x => x * 2);

// filter - select elements that meet criteria
const evens = numbers.filter(x => x % 2 === 0);

// reduce - combine elements into a single value
const sum = numbers.reduce((total, x) => total + x, 0);

// forEach - execute function for each element
numbers.forEach(x => console.log(x));
```

## Best Practices

### Use Descriptive Names
```javascript
// Good
function calculateTotalPrice(items) { ... }
function validateEmail(email) { ... }

// Bad
function calc(items) { ... }
function check(email) { ... }
```

### Keep Functions Small
```javascript
// Good - single responsibility
function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}

// Bad - multiple responsibilities
function processUser(user) {
  // validation, formatting, saving, emailing, etc.
}
```

### Use Arrow Functions for Short Functions
```javascript
// Good
const isEven = n => n % 2 === 0;
const square = x => x * x;

// Good for longer functions
const processData = (data) => {
  // Multiple lines of logic
  const processed = data.map(item => item.value);
  return processed.filter(value => value > 0);
};
```

## Next Steps

Now that you understand functions, you're ready to learn about:
- Objects and prototypes
- Arrays and array methods
- DOM manipulation
- Event handling
- Asynchronous JavaScript
