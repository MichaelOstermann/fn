# prepend

`prepend(array, value)`

Adds `value` to the beginning of `array`.

::: code-group

```ts [data-first]
prepend([2, 3, 4], 1); // [1, 2, 3, 4]
```

```ts [data-last]
pipe([2, 3, 4], prepend(1)); // [1, 2, 3, 4]
```

:::
