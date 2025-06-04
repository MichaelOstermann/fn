# drop

`drop(array, amount)`

Removes the first `amount` elements from `array`.

::: code-group

```ts [data-first]
drop([1, 2, 3, 4, 5], 2); // [3, 4, 5]
```

```ts [data-last]
pipe([1, 2, 3, 4, 5], drop(2)); // [3, 4, 5]
```

:::
