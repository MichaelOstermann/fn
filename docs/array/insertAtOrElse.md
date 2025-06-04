# insertAtOrElse

`insertAtOrElse(array, index, value, callback)`

Inserts `value` at the specified `index` in `array`, returning a new array with the inserted element, or the result of calling `callback` with the array if the index is out of bounds.

::: code-group

```ts [data-first]
insertAtOrElse([1, 2, 3], 10, 99, (arr) => arr.length); // 3
```

```ts [data-last]
pipe(
    [1, 2, 3],
    insertAtOrElse(10, 99, (arr) => arr.length),
); // 3
```

:::
