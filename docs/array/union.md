# union

`union(target, source)`

Returns a new array containing all unique elements from both `target` and `source`. Elements from `source` that are not already in `target` are added to the result.

::: code-group

```ts [data-first]
union([1, 2, 3], [3, 4, 5]); // [1, 2, 3, 4, 5]
```

```ts [data-last]
pipe([1, 2, 3], union([3, 4, 5])); // [1, 2, 3, 4, 5]
```

:::
