---
title: "Semantic HTML"
description: "Use semantic HTML elements to create meaningful and accessible web pages."
difficulty: "intermediate"
readTime: "11 min read"
category: "HTML"
tags: ["html", "semantic", "accessibility", "seo", "structure"]
published: true
date: 2024-01-19
---

# Semantic HTML

Semantic HTML uses elements that clearly describe their meaning and purpose, making web pages more accessible and SEO-friendly.

## What is Semantic HTML?

Semantic elements clearly define their content and purpose, making the code more readable and maintainable.

## Semantic Elements

### Document Structure

#### header
```html
<header>
    <h1>Website Title</h1>
    <nav>Navigation menu</nav>
</header>
```

#### main
```html
<main>
    <h2>Main Content</h2>
    <p>Primary content of the page</p>
</main>
```

#### footer
```html
<footer>
    <p>&copy; 2024 My Website</p>
</footer>
```

### Content Sections

#### article
```html
<article>
    <h2>Blog Post Title</h2>
    <p>Blog post content...</p>
</article>
```

#### section
```html
<section>
    <h2>About Us</h2>
    <p>Information about our company</p>
</section>
```

#### aside
```html
<aside>
    <h3>Related Links</h3>
    <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
    </ul>
</aside>
```

### Text Elements

#### time
```html
<time datetime="2024-01-19">January 19, 2024</time>
```

#### mark
```html
<p>This is <mark>highlighted text</mark>.</p>
```

#### figure and figcaption
```html
<figure>
    <img src="chart.png" alt="Sales Chart">
    <figcaption>Monthly sales data for 2024</figcaption>
</figure>
```

## Benefits of Semantic HTML

- **Accessibility**: Screen readers can better understand content
- **SEO**: Search engines can better index your content
- **Maintainability**: Code is easier to read and maintain
- **Future-proof**: Standards-compliant code

## Best Practices

- Use semantic elements instead of divs when appropriate
- Structure your content logically
- Include proper headings hierarchy
- Use alt text for images
- Test with screen readers
