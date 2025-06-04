# hasAll

`hasAll(array, values)`

Returns `true` if `array` contains all `values`, otherwise returns `false`. Supports iterables for the `values` parameter.

::: code-group

```ts [data-first]
hasAll([1, 2, 3, 4], [2, 3]); // true
```

```ts [data-last]
pipe([1, 2, 3, 4], hasAll([2, 3])); // true
```

:::
