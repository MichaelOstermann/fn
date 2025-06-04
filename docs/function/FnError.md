# FnError

`FnError(message, args)`

A custom error class that extends the standard Error class with additional argument storage.

This is the exception that gets thrown in `xOrThrow` utilities.

```ts
const error = new FnError("Something went wrong", [1, 2, 3]);
console.log(error.message); // "Something went wrong"
console.log(error.args); // [1, 2, 3]
```
