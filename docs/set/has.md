# has

`has(target, value)`

Checks if the `target` set contains the specified `value`. Returns `true` if the value exists, `false` otherwise.

::: code-group

```ts [data-first]
has(new Set([1, 2, 3]), 2); // true
has(new Set([1, 2, 3]), 4); // false
```

```ts [data-last]
pipe(new Set([1, 2, 3]), has(2)); // true
pipe(new Set([1, 2, 3]), has(4)); // false
```

:::
