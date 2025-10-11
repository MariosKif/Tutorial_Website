---
title: "HTML Forms"
description: "Create interactive forms to collect user input with HTML form elements."
difficulty: "intermediate"
readTime: "12 min read"
category: "HTML"
tags: ["html", "forms", "input", "user-interaction"]
published: true
date: 2024-01-18
---

# HTML Forms

HTML forms are essential for collecting user input on web pages. They allow users to submit data to servers.

## Basic Form Structure

```html
<form action="/submit" method="post">
    <!-- Form elements go here -->
    <input type="submit" value="Submit">
</form>
```

## Form Elements

### Text Input
```html
<input type="text" name="username" placeholder="Enter username">
```

### Email Input
```html
<input type="email" name="email" required>
```

### Password Input
```html
<input type="password" name="password">
```

### Textarea
```html
<textarea name="message" rows="4" cols="50"></textarea>
```

### Select Dropdown
```html
<select name="country">
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="ca">Canada</option>
</select>
```

### Checkboxes
```html
<input type="checkbox" name="newsletter" value="yes">
<label for="newsletter">Subscribe to newsletter</label>
```

### Radio Buttons
```html
<input type="radio" name="gender" value="male" id="male">
<label for="male">Male</label>
<input type="radio" name="gender" value="female" id="female">
<label for="female">Female</label>
```

## Form Validation

### Required Fields
```html
<input type="text" name="name" required>
```

### Input Patterns
```html
<input type="text" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890">
```

## Best Practices

- Always use labels with form elements
- Group related fields with fieldset
- Use appropriate input types
- Include form validation
- Make forms accessible
