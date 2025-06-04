# isNone

`isNone(value)`

Checks if a value is `null` or `undefined`. Returns `true` if the value is either `null` or `undefined`, otherwise returns `false`.

::: code-group

```ts [data-first]
isNone(null); // true
isNone(undefined); // true
isNone(0); // false
isNone(""); // false
```

```ts [data-last]
pipe(null, isNone()); // true
pipe(undefined, isNone()); // true
pipe(0, isNone()); // false
pipe("", isNone()); // false
```

:::
