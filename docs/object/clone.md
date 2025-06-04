# clone

`clone(target)`

Creates a shallow copy of an object, unless marked as mutable with `markAsMutable` inside a mutation context (see [@monstermann/remmi](https://michaelostermann.github.io/remmi/#clonearray-array)).

::: code-group

```ts [data-first]
const original = { a: 1, b: 2 };
const copy = clone(original); // { a: 1, b: 2 }
```

```ts [data-last]
const original = { a: 1, b: 2 };
const copy = pipe(original, clone()); // { a: 1, b: 2 }
```

:::
