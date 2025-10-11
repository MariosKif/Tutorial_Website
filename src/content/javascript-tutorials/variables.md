---
title: "JavaScript Variables & Data Types"
description: "Master JavaScript variables, data types, and how to work with different kinds of data."
difficulty: "beginner"
readTime: "12 min read"
category: "JavaScript"
tags: ["javascript", "variables", "data-types", "let", "const", "var"]
published: true
date: 2024-01-21
---

# JavaScript Variables & Data Types

Variables are containers for storing data values. Understanding variables and data types is fundamental to JavaScript programming.

## Variable Declarations

### let
`let` is the modern way to declare variables that can be reassigned:

```javascript
let name = "John";
name = "Jane"; // This is allowed

let age;
age = 25; // Declaration and assignment can be separate
```

### const
`const` declares constants that cannot be reassigned:

```javascript
const PI = 3.14159;
// PI = 3.14; // This would cause an error

const person = { name: "John" };
person.name = "Jane"; // This is allowed (object properties can change)
// person = {}; // This would cause an error
```

### var
`var` is the older way to declare variables (avoid in modern code):

```javascript
var oldStyle = "avoid this";
```

## Data Types

JavaScript has several built-in data types:

### Primitive Types

#### String
```javascript
let message = "Hello, World!";
let name = 'John';
let template = `Hello, ${name}!`; // Template literal
```

#### Number
```javascript
let integer = 42;
let decimal = 3.14;
let negative = -10;
let scientific = 1e6; // 1,000,000
```

#### Boolean
```javascript
let isActive = true;
let isComplete = false;
```

#### Undefined
```javascript
let notAssigned; // undefined
let explicitlyUndefined = undefined;
```

#### Null
```javascript
let empty = null;
```

#### Symbol (ES6)
```javascript
let id = Symbol("id");
```

### Reference Types

#### Object
```javascript
let person = {
  name: "John",
  age: 25,
  city: "New York"
};
```

#### Array
```javascript
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["hello", 42, true, { name: "John" }];
```

#### Function
```javascript
function greet(name) {
  return "Hello, " + name;
}

let greetFunction = function(name) {
  return "Hello, " + name;
};
```

## Type Checking

### typeof Operator
```javascript
console.log(typeof "hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (this is a known quirk)
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){}); // "function"
```

## Variable Naming Rules

- Must start with a letter, underscore, or dollar sign
- Can contain letters, digits, underscores, and dollar signs
- Cannot be reserved keywords
- Case sensitive

```javascript
// Valid names
let userName;
let _private;
let $element;
let user123;

// Invalid names
// let 123user;     // Cannot start with number
// let user-name;   // Cannot contain hyphens
// let let;         // Cannot use reserved keyword
```

## Best Practices

### Use Descriptive Names
```javascript
// Good
let userAge = 25;
let isLoggedIn = true;
let maxRetryAttempts = 3;

// Bad
let a = 25;
let flag = true;
let x = 3;
```

### Use const by Default
```javascript
// Use const unless you need to reassign
const API_URL = "https://api.example.com";
const MAX_ITEMS = 100;

// Use let only when reassignment is needed
let currentUser = null;
currentUser = getUser();
```

### Initialize Variables
```javascript
// Good
let count = 0;
let message = "";

// Avoid
let count; // undefined
```

## Hoisting

Variables declared with `var` are hoisted (moved to the top of their scope):

```javascript
console.log(x); // undefined (not an error)
var x = 5;
```

Variables declared with `let` and `const` are not hoisted:

```javascript
console.log(y); // ReferenceError
let y = 5;
```

## Scope

### Global Scope
```javascript
let globalVar = "I'm global";

function myFunction() {
  console.log(globalVar); // Can access global variables
}
```

### Function Scope
```javascript
function myFunction() {
  let localVar = "I'm local";
  console.log(localVar); // Can access local variables
}
// console.log(localVar); // Error: localVar is not defined
```

### Block Scope (let and const)
```javascript
if (true) {
  let blockVar = "I'm in a block";
  const blockConst = "I'm also in a block";
}
// console.log(blockVar); // Error: blockVar is not defined
```

## Next Steps

Now that you understand variables and data types, you're ready to learn about:
- Operators and expressions
- Type conversion
- Functions
- Control structures
