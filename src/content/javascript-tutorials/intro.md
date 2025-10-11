---
title: "JavaScript Introduction"
description: "Get started with JavaScript - the programming language that powers the modern web."
difficulty: "beginner"
readTime: "10 min read"
category: "JavaScript"
tags: ["javascript", "basics", "programming", "web"]
published: true
date: 2024-01-20
---

# JavaScript Introduction

JavaScript is a versatile programming language that runs in web browsers and on servers. It's essential for creating interactive web applications and is one of the most popular programming languages in the world.

## What is JavaScript?

JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It's primarily used for:

- Adding interactivity to web pages
- Building web applications
- Server-side development (Node.js)
- Mobile app development
- Desktop applications

## JavaScript in the Browser

JavaScript runs in web browsers and can:

- Manipulate HTML elements
- Respond to user events
- Make network requests
- Store data locally
- Create animations and effects

## Basic Syntax

### Variables
```javascript
// Using let (recommended)
let name = "John";
let age = 25;

// Using const for constants
const PI = 3.14159;

// Using var (older syntax)
var city = "New York";
```

### Data Types
```javascript
// String
let message = "Hello, World!";

// Number
let count = 42;
let price = 19.99;

// Boolean
let isActive = true;
let isComplete = false;

// Array
let fruits = ["apple", "banana", "orange"];

// Object
let person = {
  name: "John",
  age: 25,
  city: "New York"
};
```

### Functions
```javascript
// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function expression
const greet = function(name) {
  return "Hello, " + name + "!";
};

// Arrow function (ES6)
const greet = (name) => {
  return "Hello, " + name + "!";
};
```

## Console Output

Use `console.log()` to output information:

```javascript
console.log("Hello, World!");
console.log("The answer is:", 42);
console.log("User:", { name: "John", age: 25 });
```

## DOM Manipulation

JavaScript can interact with HTML elements:

```javascript
// Get an element
const element = document.getElementById("myElement");

// Change content
element.textContent = "New content";

// Add event listener
element.addEventListener("click", function() {
  alert("Button clicked!");
});
```

## Modern JavaScript (ES6+)

### Template Literals
```javascript
const name = "John";
const message = `Hello, ${name}!`;
```

### Destructuring
```javascript
const person = { name: "John", age: 25 };
const { name, age } = person;
```

### Arrow Functions
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
```

## Next Steps

Now that you understand JavaScript basics, you're ready to learn about:
- Variables and data types
- Functions and scope
- Objects and arrays
- DOM manipulation
- Event handling
