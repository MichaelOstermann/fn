# insertAt

`insertAt(array, index, value)`

Inserts `value` at the specified `index` in `array`, returning a new array with the inserted element.

::: code-group

```ts [data-first]
insertAt([1, 2, 3], 1, 10); // [1, 10, 2, 3]
```

```ts [data-last]
pipe([1, 2, 3], insertAt(1, 10)); // [1, 10, 2, 3]
```

:::
