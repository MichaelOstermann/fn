# isFalsy

`isFalsy(target)`

Checks if a value is falsy (false, 0, "", null, undefined).

::: code-group

```ts [data-first]
isFalsy(false); // true
isFalsy(0); // true
isFalsy(""); // true
isFalsy("hello"); // false
```

```ts [data-last]
pipe(false, isFalsy()); // true
pipe("hello", isFalsy()); // false
```

:::
