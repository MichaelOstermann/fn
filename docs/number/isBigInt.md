# isBigInt

`isBigInt(target)`

Returns `true` if `target` is a bigint, otherwise `false`. This function acts as a type guard.

::: code-group

```ts [data-first]
isBigInt(123n); // true
isBigInt(123); // false
isBigInt("123"); // false
isBigInt(null); // false
```

```ts [data-last]
pipe(123n, isBigInt()); // true
pipe(123, isBigInt()); // false
pipe("123", isBigInt()); // false
pipe(null, isBigInt()); // false
```

:::
