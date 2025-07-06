# randomOr

`randomOr(array, fallback)`

Returns a random element from `array`, or `fallback` if the array is empty.

::: code-group

```ts [data-first]
randomOr([1, 2, 3, 4], 0); // 2 (random)
```

```ts [data-last]
pipe([1, 2, 3, 4], randomOr(0)); // 2 (random)
```

:::
