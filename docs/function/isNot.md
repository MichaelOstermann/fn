# isNot

`isNot(source)`

Checks if two values are strictly unequal using `===` or `Object.is`.

::: code-group

```ts [data-first]
isNot(5, 5); // false
isNot("hello", "world"); // true
```

```ts [data-last]
pipe(5, isNot(5)); // false
pipe("hello", isNot("world")); // true
```

:::
