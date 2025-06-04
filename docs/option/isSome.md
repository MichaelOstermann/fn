# isSome

`isSome(value)`

Checks if a value is not `null` or `undefined`. Returns `true` if the value is neither `null` nor `undefined`, otherwise returns `false`.

::: code-group

```ts [data-first]
isSome(0); // true
isSome(""); // true
isSome(false); // true
isSome(null); // false
isSome(undefined); // false
```

```ts [data-last]
pipe(0, isSome()); // true
pipe("", isSome()); // true
pipe(false, isSome()); // true
pipe(null, isSome()); // false
pipe(undefined, isSome()); // false
```

:::
