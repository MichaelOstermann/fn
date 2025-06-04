# test

`test(target, key, predicate)`

Checks if the `key` property of `target` object passes the `predicate` function test.

::: code-group

```ts [data-first]
test({ a: 5, b: 2 }, "a", (x) => x > 3); // true
test({ a: 1, b: 2 }, "a", (x) => x > 3); // false
```

```ts [data-last]
pipe(
    { a: 5, b: 2 },
    test("a", (x) => x > 3),
); // true

pipe(
    { a: 1, b: 2 },
    test("a", (x) => x > 3),
); // false
```

:::
