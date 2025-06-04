# matches

`matches(target, props)`

Checks if all properties in `props` object have equal values in `target` object.

::: code-group

```ts [data-first]
matches({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 }); // true
matches({ a: 1, b: 2, c: 3 }, { a: 1, b: 3 }); // false
```

```ts [data-last]
pipe({ a: 1, b: 2, c: 3 }, matches({ a: 1, b: 2 })); // true
pipe({ a: 1, b: 2, c: 3 }, matches({ a: 1, b: 3 })); // false
```

:::
