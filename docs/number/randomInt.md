# randomInt

`randomInt(start, end)`

Returns a random integer within the range between `start` and `end` (inclusive). The order of `start` and `end` does not matter.

::: code-group

```ts [data-first]
randomInt(1, 10); // random integer between 1 and 10
randomInt(10, 1); // random integer between 1 and 10
randomInt(0, 5); // random integer between 0 and 5
```

```ts [data-last]
pipe(1, randomInt(10)); // random integer between 1 and 10
pipe(10, randomInt(1)); // random integer between 1 and 10
pipe(0, randomInt(5)); // random integer between 0 and 5
```

:::
