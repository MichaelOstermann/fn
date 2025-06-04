# hasAny

`hasAny(array, values)`

Returns `true` if `array` contains any of the `values`, otherwise returns `false`. Supports iterables for the `values` parameter.

::: code-group

```ts [data-first]
hasAny([1, 2, 3, 4], [5, 6, 2]); // true
```

```ts [data-last]
pipe([1, 2, 3, 4], hasAny([5, 6, 2])); // true
```

:::
