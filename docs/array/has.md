# has

`has(array, value)`

Returns `true` if `array` contains `value`, otherwise returns `false`.

::: code-group

```ts [data-first]
has([1, 2, 3, 4], 3); // true
```

```ts [data-last]
pipe([1, 2, 3, 4], has(3)); // true
```

:::
