# or

`or(target, or)`

Returns the target value if it's not `null` or `undefined`, otherwise returns the fallback value. Uses the nullish coalescing operator to provide a default value for null or undefined inputs.

::: code-group

```ts [data-first]
or(5, 10); // 5
or(null, 10); // 10
or(undefined, 10); // 10
or(0, 10); // 0
```

```ts [data-last]
pipe(5, or(10)); // 5
pipe(null, or(10)); // 10
```

:::
