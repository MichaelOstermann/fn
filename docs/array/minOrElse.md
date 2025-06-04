# minOrElse

`minOrElse(target, orElse)`

Returns the minimum value from `target` array, or calls `orElse` if the array is empty.

::: code-group

```ts [data-first]
minOrElse([5, 2, 8, 1], () => 0); // 1
minOrElse([], () => 0); // 0
```

```ts [data-last]
pipe(
    [5, 2, 8, 1],
    minOrElse(() => 0),
); // 1

pipe(
    [],
    minOrElse(() => 0),
); // 0
```

:::
