# dropLast

`dropLast(target, amount)`

Removes `amount` of elements from the end of the `target` array.

::: code-group

```ts [data-first]
dropLast([1, 2, 3, 4, 5], 2); // [1, 2, 3]
```

```ts [data-last]
pipe([1, 2, 3, 4, 5], dropLast(2)); // [1, 2, 3]
```

:::
