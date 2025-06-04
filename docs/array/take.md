# take

`take(array, amount)`

Returns a new array containing the first `amount` elements from `array`.

::: code-group

```ts [data-first]
take([1, 2, 3, 4, 5], 3); // [1, 2, 3]
```

```ts [data-last]
pipe([1, 2, 3, 4, 5], take(3)); // [1, 2, 3]
```

:::
