---
date: "2021-04-11"
title: "Responsive grid layout"
author: "andesol"
summary: "Or things I keep forgetting about no matter what, #1"
---

To make grids without media queries use this little trick:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}
```

That's it.
