# lt

`lt(target, source)`

Returns `true` if `target` is less than `source`, otherwise `false`.

::: code-group

```ts [data-first]
lt(3, 5); // true
lt(7, 2); // false
lt(4, 4); // false
```

```ts [data-last]
pipe(3, lt(5)); // true
pipe(7, lt(2)); // false
pipe(4, lt(4)); // false
```

:::
