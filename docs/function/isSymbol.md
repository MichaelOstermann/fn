# isSymbol

`isSymbol(target)`

Checks if a value is a symbol.

::: code-group

```ts [data-first]
isSymbol(Symbol("test")); // true
isSymbol("test"); // false
```

```ts [data-last]
pipe(Symbol("test"), isSymbol()); // true
pipe("test", isSymbol()); // false
```

:::
