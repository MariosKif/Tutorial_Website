---
title: "CSS Flexbox"
description: "Master CSS Flexbox for creating flexible and responsive layouts with ease."
difficulty: "intermediate"
readTime: "12 min read"
category: "CSS"
tags: ["css", "flexbox", "layout", "responsive"]
published: true
date: 2024-01-17
---

# CSS Flexbox

Flexbox is a powerful layout method that makes it easy to create flexible and responsive layouts. It's perfect for aligning items and distributing space within a container.

## Flex Container

To use flexbox, set `display: flex` on a container:

```css
.container {
  display: flex;
}
```

## Flex Direction

Controls the direction of flex items:

```css
.container {
  flex-direction: row;    /* default */
  flex-direction: column;
  flex-direction: row-reverse;
  flex-direction: column-reverse;
}
```

## Justify Content

Aligns items along the main axis:

```css
.container {
  justify-content: flex-start;    /* default */
  justify-content: flex-end;
  justify-content: center;
  justify-content: space-between;
  justify-content: space-around;
  justify-content: space-evenly;
}
```

## Align Items

Aligns items along the cross axis:

```css
.container {
  align-items: stretch;    /* default */
  align-items: flex-start;
  align-items: flex-end;
  align-items: center;
  align-items: baseline;
}
```

## Flex Wrap

Controls whether items wrap to new lines:

```css
.container {
  flex-wrap: nowrap;    /* default */
  flex-wrap: wrap;
  flex-wrap: wrap-reverse;
}
```

## Flex Items Properties

### Flex Grow
Controls how much an item grows:

```css
.item {
  flex-grow: 1;    /* grows to fill available space */
}
```

### Flex Shrink
Controls how much an item shrinks:

```css
.item {
  flex-shrink: 0;    /* doesn't shrink */
}
```

### Flex Basis
Sets the initial size of an item:

```css
.item {
  flex-basis: 200px;
}
```

## Shorthand Properties

### Flex
Combines flex-grow, flex-shrink, and flex-basis:

```css
.item {
  flex: 1 0 200px;    /* grow shrink basis */
}
```

## Common Flexbox Patterns

### Centering Content
```css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

### Equal Height Columns
```css
.columns {
  display: flex;
}

.column {
  flex: 1;
}
```

### Navigation Bar
```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

## Browser Support

Flexbox is well-supported in all modern browsers. Use vendor prefixes for older browsers if needed.
