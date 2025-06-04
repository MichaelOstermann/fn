# isEmpty

`isEmpty(map)`

Checks if `map` is empty (has no entries).

::: code-group

```ts [data-first]
isEmpty(new Map()); // true
isEmpty(new Map([["a", 1]])); // false
```

```ts [data-last]
pipe(new Map(), isEmpty()); // true
pipe(new Map([["a", 1]]), isEmpty()); // false
```

:::
