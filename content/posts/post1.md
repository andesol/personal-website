---
title: "React hooks: useReducer"
author: "andesol"
summary: "One of the most useful React Hooks, with examples"
---

`useReducer` is similar to `useState` in the sense that both serve the purpose of introducing state into functional components.

If we forget for a moment about the common naming conventions, the syntax may be quite similar. Taking the classical counter app as an example:

```js
// Counter with useEffect
import React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}> + </button>
    </>
  );
}
```

And now with `useReducer`

```js
// Counter with useReducer
import React from "react";

export default function App() {
  function reducer(count, newCount) {
    return newCount;
  }

  const [count, setCount] = React.useReducer(reducer, 0);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}> + </button>
    </>
  );
}
```

One noteworthy difference is that `useReducer` takes a so-called _reducer_ function before the initial value. This function takes the current state and an _action_ and returns a new single piece of state.

The general rules for writing reducers says they shouldn't mutate the state, but make an immutable update, and there cannot contain side-effects (reducers are _pure functions_).

The common pattern is to combine `useReducer` and `useContext` to create a global state that can be accessed by any component that may require it (thus, avoiding _prop drilling_).

Here there's an application of `useReducer` to manage the local state. It's an app that let us like or dislike a list of TV shows.

```js
import React, { useReducer } from "react";

// dummy data array
const SHOWS = [
 { id: 1, name: "American Horror Story", likes: 0 },
 { id: 2, name: "Black Mirror", likes: 0 },
 { id: 3, name: "The Queen's Gambit", likes: 0 }
];

// reducer function
function showsReducer(state, action) {

    switch (action.type) {

    case "LIKE":
        return state.map(show => (
            show.id === action.id
                ? { ...show, likes: show.likes + 1 }
                : show;
        ));

    case "DISLIKE":
        return state.map(show => (
            show.id === action.id
                ? { ...show, likes: show.likes - 1 }
                : show;
        ));

    default:
        throw new Error(`Unhandled action: ${action.type}`);
    }
}

// list of show component
function Shows({ initialList }) {
    const [state, dispatch] = useReducer(showsReducer, initialList);

    return (
        <ul>
            {state.map((show) => {
                return (
                    <li key={`show-${show.id}`}>
                        <p>{show.name}</p>
                        <p>{show.likes}</p>
                        <button
                            onClick={() => dispatch({ type: "LIKE", id: show.id })
                        }>
                            Like
                        </button>
                        <button
                            onClick={() => dispatch({ type: "DISLIKE", id: show.id })
                        }>
                            Dislike
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}


export default function App() {
    return (
        <div className="App">
            <h2>Rate this shows</h2>
            <Shows initialList={SHOWS} />
        </div>
    );
}
```

So the question might be: when to use `useState` and when `useReducer`?

A rule of thumb would be to use `useState` for single pieces of state, and switch to `useReducer` when the state update depends on past changes or when the stat eis a structure with several sub-elements (`useReducer` is particularly useful to update objects or arrays in a controlled and testable manner).
