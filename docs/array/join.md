# join

`join(array, separator)`

Joins all elements of `array` into a string, separated by the specified `separator`.

::: code-group

```ts [data-first]
join([1, 2, 3], ", "); // "1, 2, 3"
```

```ts [data-last]
pipe([1, 2, 3], join(", ")); // "1, 2, 3"
```

:::
