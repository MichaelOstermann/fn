# isAsyncIterable

`isAsyncIterable(value)`

Checks if a value is an async iterable by testing for the presence of `Symbol.asyncIterator`.

::: code-group

```ts [data-first]
isAsyncIterable(
    (async function* () {
        yield 1;
    })(),
); // true

isAsyncIterable([1, 2, 3]); // false
```

```ts [data-last]
pipe(
    (async function* () {
        yield 1;
    })(),
    isAsyncIterable(),
); // true

pipe([1, 2, 3], isAsyncIterable()); // false
```

:::
