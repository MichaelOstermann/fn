# limitPrecision

`limitPrecision(target, precision)`

Rounds `target` to the specified number of decimal places defined by `precision`.

::: code-group

```ts [data-first]
limitPrecision(3.14159, 2); // 3.14
limitPrecision(2.7182818, 3); // 2.718
limitPrecision(123.456, 0); // 123
```

```ts [data-last]
pipe(3.14159, limitPrecision(2)); // 3.14
pipe(2.7182818, limitPrecision(3)); // 2.718
pipe(123.456, limitPrecision(0)); // 123
```

:::
