# removeOrElse

`removeOrElse(target, value, orElse)`

Removes a `value` from the `target` set and returns a new set. If the value doesn't exist in the set, calls the `orElse` function with the target set and returns its result.

::: code-group

```ts [data-first]
removeOrElse(new Set([1, 2, 3]), 2, (set) => set.size); // Set([1, 3])
removeOrElse(new Set([1, 2, 3]), 4, (set) => set.size); // 3
```

```ts [data-last]
pipe(
    new Set([1, 2, 3]),
    removeOrElse(2, (set) => set.size),
); // Set([1, 3])

pipe(
    new Set([1, 2, 3]),
    removeOrElse(4, (set) => set.size),
); // 3
```

:::
