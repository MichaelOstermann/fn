# testAll

`testAll(target, props)`

Checks if all properties in `target` object pass their corresponding predicate functions in `props` object.

::: code-group

```ts [data-first]
testAll({ a: 5, b: 2 }, { a: (x) => x > 3, b: (x) => x > 0 }); // true
testAll({ a: 1, b: 2 }, { a: (x) => x > 3, b: (x) => x > 0 }); // false
```

```ts [data-last]
pipe({ a: 5, b: 2 }, testAll({ a: (x) => x > 3, b: (x) => x > 0 })); // true
pipe({ a: 1, b: 2 }, testAll({ a: (x) => x > 3, b: (x) => x > 0 })); // false
```

:::
