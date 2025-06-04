# isNotFinite

`isNotFinite(target)`

Returns `true` if `target` is not a finite number, otherwise `false`.

::: code-group

```ts [data-first]
isNotFinite(Infinity); // true
isNotFinite(-Infinity); // true
isNotFinite(NaN); // true
isNotFinite(42); // false
isNotFinite(3.14); // false
```

```ts [data-last]
pipe(Infinity, isNotFinite()); // true
pipe(-Infinity, isNotFinite()); // true
pipe(NaN, isNotFinite()); // true
pipe(42, isNotFinite()); // false
pipe(3.14, isNotFinite()); // false
```

:::
