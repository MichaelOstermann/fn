# takeLast

`takeLast(array, amount)`

Returns a new array containing the last `amount` elements from `array`.

::: code-group

```ts [data-first]
takeLast([1, 2, 3, 4, 5], 3); // [3, 4, 5]
```

```ts [data-last]
pipe([1, 2, 3, 4, 5], takeLast(3)); // [3, 4, 5]
```

:::
