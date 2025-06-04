# maxOrElse

`maxOrElse(array, orElse)`

Returns the maximum value from `array`, or calls `orElse` if the array is empty.

::: code-group

```ts [data-first]
maxOrElse([1, 5, 3], () => 0); // 5
maxOrElse([], () => 0); // 0
```

```ts [data-last]
pipe(
    [1, 5, 3],
    maxOrElse(() => 0),
); // 5

pipe(
    [],
    maxOrElse(() => 0),
); // 0
```

:::
