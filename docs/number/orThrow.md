# orThrow

`orThrow(target)`

Returns the numeric value of `target` if it's a finite number, otherwise throws an error.

::: code-group

```ts [data-first]
orThrow(42); // 42
orThrow(NaN); // throws FnError
orThrow(Infinity); // throws FnError
orThrow("hello"); // throws FnError
```

```ts [data-last]
pipe(42, orThrow()); // 42
pipe(NaN, orThrow()); // throws FnError
pipe(Infinity, orThrow()); // throws FnError
pipe("hello", orThrow()); // throws FnError
```

:::
