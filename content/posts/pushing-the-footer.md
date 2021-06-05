---
date: "2021-04-11"
title: "Pushing down the footer"
author: "andesol"
summary: "Or: things I keep forgetting about #2"
---

This is a simple one.

Imagine your create a HTML structure like this:

```html
<body>
  <header>...</header>
  <main>Content here</main>
  <footer>...</footer>
</body>
```

But there's few content and you end up with something like:

![floating footer](/post-img/float-footer.png)

To push the footer to the bottom of the page (without making it stiky or anything) you can do:

```css
body {
  display: flex;
  min-height: 100vh;
}

footer {
  margin-top: auto;
}
```

If for [some reason](https://chanind.github.io/javascript/2019/09/28/avoid-100vh-on-mobile-web.html) you cannot use `vh` units, this also works:

```css
html {
  height: 100%;
}

body {
  display: flex;
  min-height: 100%;
}
```
