# randomOrElse

`randomOrElse(array, callback)`

Returns a random element from `array`, or the result of calling `callback` with the array if the array is empty.

::: code-group

```ts [data-first]
randomOrElse([1, 2, 3, 4], (arr) => arr.length); // 2 (random)
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    randomOrElse((arr) => arr.length),
); // 2 (random)
```

:::
