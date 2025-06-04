# isPromise

`isPromise(target)`

Checks if `target` is a Promise instance.

::: code-group

```ts [data-first]
isPromise(Promise.resolve()); // true
isPromise("hello"); // false
```

```ts [data-last]
pipe(Promise.resolve(), isPromise()); // true
pipe("hello", isPromise()); // false
```

:::
