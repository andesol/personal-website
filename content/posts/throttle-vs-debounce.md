---
date: "2021-05-28"
title: "Throttle vs debouncing"
author: "andesol"
summary: "The difference between this techniques"
---

Both **throttle** and **debounce** have the same purpose: to delay the call after repeating events for performance reasons.

This is tipically used for DOM events, such as scrolling, or API calls.

- Throttling consists on restricting the number of calls to a function in a given period of time.

- Debouncing consists on not calling the function after a certain ammount of time has passed.

It is recommended to use any trusted implementations of this technicques, instead of creeating our own version.

For instance, the [lodash implementation](https://lodash.com/docs/#debounce) should not weight much if imported alone.

We can create a debounced version of a function by:

```js
let debounced = _.debounce(funcToCall, 250, { leading: true });
```

_Leading_ or _trailing_ flags can be specified in the options object, depending on if we want the function to execute after immediatly after the first event (leading edge) or wait till the specified waiting time).
