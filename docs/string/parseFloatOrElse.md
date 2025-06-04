# parseFloatOrElse

`parseFloatOrElse(target, orElse)`

Parses `target` string and returns a floating point number, or the result of calling `orElse` function with `target` if parsing fails.

::: code-group

```ts [data-first]
parseFloatOrElse("3.14", () => 0); // 3.14
parseFloatOrElse("abc", (str) => str.length); // 3
```

```ts [data-last]
pipe(
    "3.14",
    parseFloatOrElse(() => 0),
); // 3.14

pipe(
    "abc",
    parseFloatOrElse((str) => str.length),
); // 3
```

:::
