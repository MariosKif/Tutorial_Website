---
title: "CSS Selectors"
description: "Master CSS selectors to target specific HTML elements with precision and efficiency."
difficulty: "beginner"
readTime: "10 min read"
category: "CSS"
tags: ["css", "selectors", "targeting", "specificity"]
published: true
date: 2024-01-16
---

# CSS Selectors

CSS selectors are patterns used to select and style HTML elements. Understanding selectors is crucial for writing efficient and maintainable CSS.

## Basic Selectors

### Element Selector
Selects all elements of a specific type:
```css
p {
  color: blue;
}
```

### Class Selector
Selects elements with a specific class:
```css
.highlight {
  background-color: yellow;
}
```

### ID Selector
Selects an element with a specific ID:
```css
#main-content {
  width: 100%;
}
```

## Combinator Selectors

### Descendant Selector
Selects elements that are descendants of another element:
```css
div p {
  color: red;
}
```

### Child Selector
Selects direct children only:
```css
div > p {
  color: green;
}
```

### Adjacent Sibling Selector
Selects the next sibling element:
```css
h1 + p {
  margin-top: 0;
}
```

## Attribute Selectors

### Basic Attribute Selector
```css
input[type="text"] {
  border: 1px solid #ccc;
}
```

### Attribute Value Selector
```css
a[href="https://example.com"] {
  color: blue;
}
```

## Pseudo-class Selectors

### Hover Effect
```css
button:hover {
  background-color: #0056b3;
}
```

### First Child
```css
li:first-child {
  font-weight: bold;
}
```

## Pseudo-element Selectors

### Before and After
```css
p::before {
  content: "→ ";
}

p::after {
  content: " ←";
}
```

## Selector Specificity

Understanding specificity helps you know which styles will be applied:

1. Inline styles (1000)
2. IDs (100)
3. Classes, attributes, pseudo-classes (10)
4. Elements and pseudo-elements (1)

## Best Practices

- Use classes for reusable styles
- Avoid overly specific selectors
- Keep selectors simple and readable
- Use meaningful class names
