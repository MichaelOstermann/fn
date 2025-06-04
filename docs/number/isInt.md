# isInt

`isInt(value)`

Returns `true` if `value` is an integer, otherwise `false`. This function acts as a type guard.

::: code-group

```ts [data-first]
isInt(42); // true
isInt(-7); // true
isInt(0); // true
isInt(3.14); // false
isInt(NaN); // false
isInt(Infinity); // false
```

```ts [data-last]
pipe(42, isInt()); // true
pipe(-7, isInt()); // true
pipe(0, isInt()); // true
pipe(3.14, isInt()); // false
pipe(NaN, isInt()); // false
pipe(Infinity, isInt()); // false
```

:::
