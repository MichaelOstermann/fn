# once

`once(fn)`

Creates a function that executes only once and caches the result for subsequent calls.

```ts
const expensive = once(() => {
    console.log("Computing...");
    return 42;
});

expensive(); // logs "Computing..." and returns 42
expensive(); // returns 42 (cached, no log)
```
