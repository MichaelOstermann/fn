# random

`random(array)`

Returns a random element from `array`, or `undefined` if the array is empty.

::: code-group

```ts [data-first]
random([1, 2, 3, 4]); // 2 (random)
```

```ts [data-last]
pipe([1, 2, 3, 4], random()); // 2 (random)
```

:::
