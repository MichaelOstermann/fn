# orThrow

`orThrow(target)`

Returns the target value if it's not `null` or `undefined`, otherwise throws an error. This function is useful for asserting that a value is not null or undefined.

::: code-group

```ts [data-first]
orThrow(5); // 5
orThrow("hello"); // "hello"
orThrow(null); // throws FnError
orThrow(undefined); // throws FnError
```

```ts [data-last]
pipe(5, orThrow()); // 5
pipe(null, orThrow()); // throws FnError
```

:::
