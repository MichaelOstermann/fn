# countBy

`countBy(target, predicate)`

Counts the number of elements in the `target` array satisfy the provided `predicate` function.

::: code-group

```ts [data-first]
const isEven = (n) => n % 2 === 0;
countBy([1, 2, 3, 4, 5], isEven); // 2
```

```ts [data-last]
const isEven = (n) => n % 2 === 0;
pipe([1, 2, 3, 4, 5], countBy(isEven)); // 2
```

:::
