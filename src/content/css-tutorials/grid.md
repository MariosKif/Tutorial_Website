---
title: "CSS Grid"
description: "Learn CSS Grid for creating complex two-dimensional layouts with precision and control."
difficulty: "intermediate"
readTime: "15 min read"
category: "CSS"
tags: ["css", "grid", "layout", "responsive", "advanced"]
published: true
date: 2024-01-18
---

# CSS Grid

CSS Grid is a powerful two-dimensional layout system that allows you to create complex layouts with rows and columns. It's perfect for creating sophisticated web layouts.

## Grid Container

To use CSS Grid, set `display: grid` on a container:

```css
.container {
  display: grid;
}
```

## Grid Template Columns

Defines the columns of the grid:

```css
.container {
  grid-template-columns: 200px 200px 200px;
  /* or */
  grid-template-columns: 1fr 2fr 1fr;
  /* or */
  grid-template-columns: repeat(3, 1fr);
}
```

## Grid Template Rows

Defines the rows of the grid:

```css
.container {
  grid-template-rows: 100px 200px 100px;
  /* or */
  grid-template-rows: repeat(3, 1fr);
}
```

## Grid Gap

Sets the spacing between grid items:

```css
.container {
  gap: 20px;
  /* or */
  column-gap: 20px;
  row-gap: 10px;
}
```

## Grid Areas

Named grid areas make layouts more readable:

```css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

## Grid Item Properties

### Grid Column
Controls which columns an item spans:

```css
.item {
  grid-column: 1 / 3;    /* spans from line 1 to 3 */
  /* or */
  grid-column: 1 / span 2;    /* starts at 1, spans 2 columns */
}
```

### Grid Row
Controls which rows an item spans:

```css
.item {
  grid-row: 1 / 3;
  /* or */
  grid-row: 1 / span 2;
}
```

### Grid Area
Shorthand for grid-row and grid-column:

```css
.item {
  grid-area: 1 / 1 / 3 / 3;    /* row-start / col-start / row-end / col-end */
}
```

## Responsive Grid

Create responsive grids with different layouts:

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

## Common Grid Patterns

### Card Layout
```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
```

### Dashboard Layout
```css
.dashboard {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "sidebar main main";
  grid-template-columns: 250px 1fr 1fr;
  grid-template-rows: 60px 1fr 1fr;
  height: 100vh;
}
```

## Grid vs Flexbox

- **Grid**: Two-dimensional layouts (rows and columns)
- **Flexbox**: One-dimensional layouts (row OR column)
- Use Grid for overall page layout
- Use Flexbox for component-level layouts

## Browser Support

CSS Grid is supported in all modern browsers. Use feature queries for progressive enhancement.
