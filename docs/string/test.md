# test

`test(target, source)`

Tests if `target` string matches the `source` regular expression.

::: code-group

```ts [data-first]
test("hello world", /world/); // true
test("hello world", /\d+/); // false
```

```ts [data-last]
pipe("hello world", test(/world/)); // true
pipe("hello world", test(/\d+/)); // false
```

:::
