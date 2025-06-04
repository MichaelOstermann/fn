# concat

`concat(array, source)`

Concatenates `source` array to the end of `array`, returning a new array with the combined elements.

::: code-group

```ts [data-first]
concat([1, 2], [3, 4]); // [1, 2, 3, 4]
```

```ts [data-last]
pipe([1, 2], concat([3, 4])); // [1, 2, 3, 4]
```

:::
