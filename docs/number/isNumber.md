# isNumber

`isNumber(target)`

Returns `true` if `target` is a number, otherwise `false`. This function acts as a type guard.

::: code-group

```ts [data-first]
isNumber(42); // true
isNumber(3.14); // true
isNumber(NaN); // true
isNumber(Infinity); // true
isNumber("123"); // false
isNumber(null); // false
```

```ts [data-last]
pipe(42, isNumber()); // true
pipe(3.14, isNumber()); // true
pipe(NaN, isNumber()); // true
pipe(Infinity, isNumber()); // true
pipe("123", isNumber()); // false
pipe(null, isNumber()); // false
```

:::
