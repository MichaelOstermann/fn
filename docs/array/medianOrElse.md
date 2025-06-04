# medianOrElse

`medianOrElse(array, orElse)`

Returns the median value from `array`, or calls `orElse` if the array is empty.

::: code-group

```ts [data-first]
medianOrElse([1, 3, 5], () => 0); // 3
medianOrElse([1, 2, 3, 4], () => 0); // 2.5
medianOrElse([], () => 0); // 0
```

```ts [data-last]
pipe(
    [1, 3, 5],
    medianOrElse(() => 0),
); // 3

pipe(
    [1, 2, 3, 4],
    medianOrElse(() => 0),
); // 2.5

pipe(
    [],
    medianOrElse(() => 0),
); // 0
```

:::
