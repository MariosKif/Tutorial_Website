---
title: "HTML Attributes"
description: "Learn how to use HTML attributes to provide additional information about elements."
difficulty: "beginner"
readTime: "9 min read"
category: "HTML"
tags: ["html", "attributes", "properties", "elements"]
published: true
date: 2024-01-17
---

# HTML Attributes

HTML attributes provide additional information about HTML elements. They are always specified in the opening tag.

## Attribute Syntax

```html
<element attribute="value">Content</element>
```

## Common Attributes

### Global Attributes

#### id
```html
<p id="unique-paragraph">This paragraph has a unique ID.</p>
```

#### class
```html
<p class="highlight important">This paragraph has two classes.</p>
```

#### style
```html
<p style="color: blue; font-size: 18px;">Styled paragraph</p>
```

### Element-Specific Attributes

#### Links (href)
```html
<a href="https://example.com">External Link</a>
<a href="#section1">Internal Link</a>
```

#### Images (src, alt)
```html
<img src="photo.jpg" alt="A beautiful sunset">
```

#### Input (type, name)
```html
<input type="text" name="username" placeholder="Enter username">
```

## Boolean Attributes

Some attributes don't need values:
```html
<input type="checkbox" checked>
<button disabled>Cannot Click</button>
```

## Best Practices

- Always use quotes around attribute values
- Use meaningful attribute names
- Include alt text for images
- Use semantic attribute names
