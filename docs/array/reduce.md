# reduce

`reduce(array, initial, reducer)`

Reduces `array` to a single value by executing the `reducer` function on each element, starting with the `initial` accumulator value.

::: code-group

```ts [data-first]
reduce([1, 2, 3, 4], 0, (acc, x) => acc + x); // 10
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    reduce(0, (acc, x) => acc + x),
); // 10
```

:::
