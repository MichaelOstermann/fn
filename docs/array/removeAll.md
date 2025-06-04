# removeAll

`removeAll(target, values)`

Removes all occurrences of each value in `values` from `target` array. If no values are found, returns the original array unchanged. Supports iterables for the values parameter.

::: code-group

```ts [data-first]
removeAll([1, 2, 3, 2, 4], [2, 4]); // [1, 3]
```

```ts [data-last]
pipe([1, 2, 3, 2, 4], removeAll([2, 4])); // [1, 3]
```

:::
