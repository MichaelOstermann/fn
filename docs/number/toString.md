# toString

`toString(target)`

Converts `target` to a string representation.

::: code-group

```ts [data-first]
toString(42); // "42"
toString(3.14); // "3.14"
toString(NaN); // "NaN"
toString(Infinity); // "Infinity"
```

```ts [data-last]
pipe(42, toString()); // "42"
pipe(3.14, toString()); // "3.14"
pipe(NaN, toString()); // "NaN"
pipe(Infinity, toString()); // "Infinity"
```

:::
