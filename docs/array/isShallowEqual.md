# isShallowEqual

`isShallowEqual(array, other)`

Returns `true` if `array` and `other` have the same length and their elements are equal using shallow comparison, otherwise returns `false`.

::: code-group

```ts [data-first]
isShallowEqual([1, 2, 3], [1, 2, 3]); // true
```

```ts [data-last]
pipe([1, 2, 3], isShallowEqual([1, 2, 3])); // true
```

:::
