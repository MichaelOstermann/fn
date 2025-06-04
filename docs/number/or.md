# or

`or(target, or)`

Returns the numeric value of `target` if it's a finite number, otherwise returns the fallback value `or`.

::: code-group

```ts [data-first]
or(42, 0); // 42
or(NaN, 0); // 0
or(Infinity, 0); // 0
or("hello", 0); // 0
```

```ts [data-last]
pipe(42, or(0)); // 42
pipe(NaN, or(0)); // 0
pipe(Infinity, or(0)); // 0
pipe("hello", or(0)); // 0
```

:::
