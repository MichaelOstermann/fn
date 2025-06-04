# firstOrElse

`firstOrElse(array, callback)`

Returns the first element of `array`, or the result of calling `callback` with the array if the array is empty.

::: code-group

```ts [data-first]
firstOrElse([1, 2, 3, 4], (arr) => arr.length); // 1
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    firstOrElse((arr) => arr.length),
); // 1
```

:::
