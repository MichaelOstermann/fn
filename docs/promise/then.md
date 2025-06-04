# then

`then(target, onResolved)`

Transforms resolved promise values with `onResolved`. This is an alias for `Promise.then`.

::: code-group

```ts [data-first]
then(Promise.resolve(5), (x) => x * 2); // Promise<10>
```

```ts [data-last]
pipe(
    Promise.resolve(5),
    then((x) => x * 2),
); // Promise<10>
```

:::
