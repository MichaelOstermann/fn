# lastOrElse

`lastOrElse(array, callback)`

Returns the last element of `array`, or the result of calling `callback` with the array if the array is empty.

::: code-group

```ts [data-first]
lastOrElse([1, 2, 3, 4], (arr) => arr.length); // 4
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    lastOrElse((arr) => arr.length),
); // 4
```

:::
