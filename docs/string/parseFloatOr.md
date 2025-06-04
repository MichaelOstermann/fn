# parseFloatOr

`parseFloatOr(target, or)`

Parses `target` string and returns a floating point number, or the `or` value if parsing fails.

::: code-group

```ts [data-first]
parseFloatOr("3.14", 0); // 3.14
parseFloatOr("abc", 0); // 0
```

```ts [data-last]
pipe("3.14", parseFloatOr(0)); // 3.14
pipe("abc", parseFloatOr(0)); // 0
```

:::
