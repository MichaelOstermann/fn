# parseFloat

`parseFloat(target)`

Parses `target` string and returns a floating point number.

::: code-group

```ts [data-first]
parseFloat("3.14"); // 3.14
parseFloat("42.5abc"); // 42.5
```

```ts [data-last]
pipe("3.14", parseFloat()); // 3.14
pipe("42.5abc", parseFloat()); // 42.5
```

:::
