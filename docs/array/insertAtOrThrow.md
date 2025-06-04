# insertAtOrThrow

`insertAtOrThrow(array, index, value)`

Inserts `value` at the specified `index` in `array`, returning a new array with the inserted element, or throws an error if the index is out of bounds.

::: code-group

```ts [data-first]
insertAtOrThrow([1, 2, 3], 1, 10); // [1, 10, 2, 3]
```

```ts [data-last]
pipe([1, 2, 3], insertAtOrThrow(1, 10)); // [1, 10, 2, 3]
```

:::
