# is

`is(source)`

Checks if two values are strictly equal using `===` or `Object.is`.

::: code-group

```ts [data-first]
is(5, 5); // true
is("hello", "world"); // false
```

```ts [data-last]
pipe(5, is(5)); // true
pipe("hello", is("world")); // false
```

:::
