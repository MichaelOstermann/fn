# sort

`sort(target, comparator)`

Returns a new array with the elements of `target` sorted using the provided `comparator` function.

::: code-group

```ts [data-first]
sort([3, 1, 4, 2], (a, b) => a - b); // [1, 2, 3, 4]
sort(["c", "a", "b"], (a, b) => a.localeCompare(b)); // ['a', 'b', 'c']
```

```ts [data-last]
pipe(
    [3, 1, 4, 2],
    sort((a, b) => a - b),
); // [1, 2, 3, 4]

pipe(
    ["c", "a", "b"],
    sort((a, b) => a.localeCompare(b)),
); // ['a', 'b', 'c']
```

:::
