# forEach

`forEach(array, callback)`

Executes the provided `callback` function once for each element in `array` and returns the original array.

::: code-group

```ts [data-first]
forEach([1, 2, 3], (x) => console.log(x)); // [1, 2, 3]
```

```ts [data-last]
pipe(
    [1, 2, 3],
    forEach((x) => console.log(x)),
); // [1, 2, 3]
```

:::
