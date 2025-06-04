# isTruthy

`isTruthy(target)`

Checks if a value is truthy (not false, 0, "", null, or undefined).

::: code-group

```ts [data-first]
isTruthy("hello"); // true
isTruthy(1); // true
isTruthy(false); // false
isTruthy(""); // false
```

```ts [data-last]
pipe("hello", isTruthy()); // true
pipe(false, isTruthy()); // false
```

:::
