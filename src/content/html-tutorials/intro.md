---
title: "HTML Introduction"
description: "Learn the fundamentals of HTML, including basic structure, elements, and attributes. Perfect for complete beginners."
difficulty: "beginner"
readTime: "5 min read"
category: "HTML"
tags: ["basics", "structure", "elements"]
published: true
date: 2024-01-15
---

# HTML Introduction

## What is HTML?

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page using markup elements called tags. HTML elements are the building blocks of HTML pages and are represented by tags.

## Basic HTML Structure

Every HTML document follows a basic structure. Here's what a minimal HTML page looks like:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first HTML page.</p>
</body>
</html>
```

## Key HTML Elements

Here are some essential HTML elements you'll use frequently:

```html
<!-- Headings -->
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Smaller Heading</h3>

<!-- Paragraphs -->
<p>This is a paragraph of text.</p>

<!-- Links -->
<a href="https://example.com">Visit Example</a>

<!-- Images -->
<img src="image.jpg" alt="Description of image">

<!-- Lists -->
<ul>
    <li>First item</li>
    <li>Second item</li>
</ul>

<ol>
    <li>First numbered item</li>
    <li>Second numbered item</li>
</ol>
```

## HTML Attributes

HTML elements can have attributes that provide additional information about the element. Attributes are always specified in the start tag and usually come in name/value pairs.

```html
<!-- Link with href attribute -->
<a href="https://example.com" target="_blank">External Link</a>

<!-- Image with src and alt attributes -->
<img src="photo.jpg" alt="A beautiful sunset" width="300" height="200">

<!-- Paragraph with class attribute -->
<p class="highlight">This paragraph has a CSS class.</p>
```

## Next Steps

Now that you understand the basics of HTML, you're ready to learn CSS to style your pages and make them look beautiful. HTML provides the structure, and CSS will provide the presentation.
