# isIterable

`isIterable(value)`

Checks if a value is iterable by testing for the presence of `Symbol.iterator`.

::: code-group

```ts [data-first]
isIterable([1, 2, 3]); // true
isIterable("hello"); // true
isIterable(42); // false
```

```ts [data-last]
pipe([1, 2, 3], isIterable()); // true
pipe(42, isIterable()); // false
```

:::
