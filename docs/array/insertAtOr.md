# insertAtOr

`insertAtOr(array, index, value, fallback)`

Inserts `value` at the specified `index` in `array`, returning a new array with the inserted element, or `fallback` if the index is out of bounds.

::: code-group

```ts [data-first]
insertAtOr([1, 2, 3], 10, 99, []); // []
```

```ts [data-last]
pipe([1, 2, 3], insertAtOr(10, 99, [])); // []
```

:::
