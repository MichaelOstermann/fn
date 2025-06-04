# hasNone

`hasNone(array, values)`

Returns `true` if `array` contains none of the `values`, otherwise returns `false`. Supports iterables for the `values` parameter.

::: code-group

```ts [data-first]
hasNone([1, 2, 3, 4], [5, 6, 7]); // true
```

```ts [data-last]
pipe([1, 2, 3, 4], hasNone([5, 6, 7])); // true
```

:::
