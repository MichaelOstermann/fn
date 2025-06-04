# isFloat

`isFloat(value)`

Returns `true` if `value` is a finite floating-point number (not an integer), otherwise `false`. This function acts as a type guard.

::: code-group

```ts [data-first]
isFloat(3.14); // true
isFloat(0.5); // true
isFloat(42); // false
isFloat(NaN); // false
isFloat(Infinity); // false
```

```ts [data-last]
pipe(3.14, isFloat()); // true
pipe(0.5, isFloat()); // true
pipe(42, isFloat()); // false
pipe(NaN, isFloat()); // false
pipe(Infinity, isFloat()); // false
```

:::
