---
title: "CSS Animations"
description: "Create smooth and engaging animations using CSS transitions and keyframes."
difficulty: "advanced"
readTime: "14 min read"
category: "CSS"
tags: ["css", "animations", "transitions", "keyframes", "performance"]
published: true
date: 2024-01-19
---

# CSS Animations

CSS animations bring your web pages to life with smooth transitions and engaging effects. Learn how to create professional animations using CSS transitions and keyframes.

## CSS Transitions

Transitions provide smooth changes between CSS property values:

```css
.button {
  background-color: blue;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: red;
}
```

## Transition Properties

### Transition Property
Specifies which properties to animate:

```css
.element {
  transition-property: width, height, background-color;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  transition-delay: 0.2s;
}
```

### Shorthand
```css
.element {
  transition: width 0.5s ease 0.2s;
  /* property duration timing-function delay */
}
```

## Timing Functions

Control the speed curve of animations:

```css
.element {
  transition-timing-function: ease;        /* default */
  transition-timing-function: linear;
  transition-timing-function: ease-in;
  transition-timing-function: ease-out;
  transition-timing-function: ease-in-out;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## CSS Keyframes

Keyframes define the steps of an animation:

```css
@keyframes slideIn {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
```

## Animation Properties

### Animation Name
```css
.element {
  animation-name: slideIn;
}
```

### Animation Duration
```css
.element {
  animation-duration: 1s;
}
```

### Animation Timing Function
```css
.element {
  animation-timing-function: ease-in-out;
}
```

### Animation Delay
```css
.element {
  animation-delay: 0.5s;
}
```

### Animation Iteration Count
```css
.element {
  animation-iteration-count: 3;    /* or infinite */
}
```

### Animation Direction
```css
.element {
  animation-direction: normal;    /* or reverse, alternate, alternate-reverse */
}
```

### Animation Fill Mode
```css
.element {
  animation-fill-mode: forwards;    /* or backwards, both, none */
}
```

### Animation Play State
```css
.element {
  animation-play-state: running;    /* or paused */
}
```

## Shorthand Animation

```css
.element {
  animation: slideIn 1s ease-in-out 0.5s 3 alternate forwards;
  /* name duration timing-function delay iteration-count direction fill-mode */
}
```

## Common Animation Examples

### Fade In
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 0.5s ease-in;
}
```

### Bounce
```css
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.bounce {
  animation: bounce 1s infinite;
}
```

### Loading Spinner
```css
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.spinner {
  animation: spin 1s linear infinite;
}
```

## Performance Tips

- Use `transform` and `opacity` for smooth animations
- Avoid animating layout properties (width, height, margin, padding)
- Use `will-change` property for elements that will be animated
- Consider using `transform3d()` to trigger hardware acceleration

## Browser Support

CSS animations are well-supported in all modern browsers. Use vendor prefixes for older browsers if needed.
