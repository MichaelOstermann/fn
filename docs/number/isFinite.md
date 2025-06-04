# isFinite

`isFinite(target)`

Returns `true` if `target` is a finite number, otherwise `false`.

::: code-group

```ts [data-first]
isFinite(42); // true
isFinite(3.14); // true
isFinite(Infinity); // false
isFinite(-Infinity); // false
isFinite(NaN); // false
```

```ts [data-last]
pipe(42, isFinite()); // true
pipe(3.14, isFinite()); // true
pipe(Infinity, isFinite()); // false
pipe(-Infinity, isFinite()); // false
pipe(NaN, isFinite()); // false
```

:::
