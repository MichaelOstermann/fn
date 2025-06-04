# forEach

`forEach(target, fn)`

Iterates over each value in the `target` set, calling the `fn` function for each value. Returns the original set unchanged.

::: code-group

```ts [data-first]
forEach(new Set([1, 2, 3]), (value) => console.log(value)); // Set([1, 2, 3])
```

```ts [data-last]
pipe(
    new Set([1, 2, 3]),
    forEach((value) => console.log(value)),
); // Set([1, 2, 3])
```

:::
