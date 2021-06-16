---
date: "2021-06-12"
title: "Reading files line by line in Node.js"
author: "andesol"
summary: "Can't be more explicit"
---

Simply:

```js
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./file.txt"),
  output: process.stdout,
});

rl.on("line", line => {
  // What to do when a line is read
  // ...
});

rl.on("close", () => {
  // What to do when all lines are read
});
```

Of course, if there's no need to do anything after each line is read, we can also use `readFile` (or its synchronous version, `readFileSync`):

```js
const fs = require("fs");

fs.readFile("./file.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  /**
   * Split by new line
   * \r for carriage return (optional)
   * \n for new line
   */
  const array = data.split(/\r?\n/);
});
```
