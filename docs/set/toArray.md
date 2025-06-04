# toArray

`toArray(target)`

Converts the `target` set to an array containing all its values.

::: code-group

```ts [data-first]
toArray(new Set([1, 2, 3])); // [1, 2, 3]
toArray(new Set(["a", "b"])); // ['a', 'b']
```

```ts [data-last]
pipe(new Set([1, 2, 3]), toArray()); // [1, 2, 3]
pipe(new Set(["a", "b"]), toArray()); // ['a', 'b']
```

:::
