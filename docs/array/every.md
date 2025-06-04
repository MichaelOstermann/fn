# every

`every(array, predicate)`

Tests whether all elements in the `array` pass the test implemented by the `predicate` function. It returns `true` if all elements pass, otherwise `false`.

::: code-group

```ts [data-first]
const isEven = (n: number) => n % 2 === 0;

every([2, 4, 6], isEven); // true
every([2, 4, 7], isEven); // false
```

```ts [data-last]
const isEven = (n: number) => n % 2 === 0;

pipe([2, 4, 6], every(isEven)); // true
pipe([2, 4, 7], every(isEven)); // false
```

:::
