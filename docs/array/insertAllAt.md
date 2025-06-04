# insertAllAt

`insertAllAt(array, index, values)`

Inserts all elements from `values` at the specified `index` in `array`, returning a new array with the inserted elements. Supports iterables for the `values` parameter.

::: code-group

```ts [data-first]
insertAllAt([1, 2, 3], 1, [10, 20]); // [1, 10, 20, 2, 3]
```

```ts [data-last]
pipe([1, 2, 3], insertAllAt(1, [10, 20])); // [1, 10, 20, 2, 3]
```

:::
