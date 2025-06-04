# unique

`unique(target)`

Returns a new array with only the unique elements from `target`, preserving the order of first occurrence.

::: code-group

```ts [data-first]
unique([1, 2, 2, 3, 1]); // [1, 2, 3]
```

```ts [data-last]
pipe([1, 2, 2, 3, 1], unique()); // [1, 2, 3]
```

:::
