# meanOrElse

`meanOrElse(array, orElse)`

Returns the mean (average) value from `array`, or calls `orElse` if the array is empty.

::: code-group

```ts [data-first]
meanOrElse([1, 2, 3], () => 0); // 2
meanOrElse([], () => 0); // 0
```

```ts [data-last]
pipe(
    [1, 2, 3],
    meanOrElse(() => 0),
); // 2

pipe(
    [],
    meanOrElse(() => 0),
); // 0
```

:::
