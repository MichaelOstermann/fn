# isArray

`isArray(value)`

Returns `true` if `value` is an array, otherwise returns `false`.

::: code-group

```ts [data-first]
isArray([1, 2, 3]); // true
```

```ts [data-last]
pipe([1, 2, 3], isArray()); // true
```

:::
