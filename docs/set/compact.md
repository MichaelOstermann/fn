# compact

`compact(target)`

Removes all nullable values (`null` and `undefined`) from the `target` set and returns a new set.

::: code-group

```ts [data-first]
compact(new Set([1, null, 2, undefined])); // Set([1, 2])
compact(new Set([1, 2, 3])); // Set([1, 2, 3])
```

```ts [data-last]
pipe(new Set([1, null, 2, undefined]), compact()); // Set([1, 2])
pipe(new Set([1, 2, 3]), compact()); // Set([1, 2, 3])
```

:::
