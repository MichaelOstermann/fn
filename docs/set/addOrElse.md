# addOrElse

`addOrElse(target, value, orElse)`

Adds a `value` to the `target` set and returns a new set. If the value already exists in the set, calls the `orElse` function with the target set and returns its result.

::: code-group

```ts [data-first]
addOrElse(new Set([1, 2]), 3, (set) => set.size); // Set([1, 2, 3])
addOrElse(new Set([1, 2]), 2, (set) => set.size); // 2
```

```ts [data-last]
pipe(
    new Set([1, 2]),
    addOrElse(3, (set) => set.size),
); // Set([1, 2, 3])

pipe(
    new Set([1, 2]),
    addOrElse(2, (set) => set.size),
); // 2
```

:::
