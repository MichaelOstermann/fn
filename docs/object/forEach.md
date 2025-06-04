# forEach

`forEach(target, fn)`

Executes `fn` function for each key-value pair in `target` object and returns the original object.

::: code-group

```ts [data-first]
forEach({ a: 1, b: 2 }, ([key, value]) => console.log(key, value)); // { a: 1, b: 2 }
```

```ts [data-last]
pipe(
    { a: 1, b: 2 },
    forEach(([key, value]) => console.log(key, value)),
); // { a: 1, b: 2 }
```

:::
