# shuffle

`shuffle(array)`

Returns a new array with the elements of `array` randomly shuffled.

::: code-group

```ts [data-first]
shuffle([1, 2, 3, 4]); // [3, 1, 4, 2] (random)
```

```ts [data-last]
pipe([1, 2, 3, 4], shuffle()); // [3, 1, 4, 2] (random)
```

:::
