# clone

`clone(target)`

Creates a shallow copy of a `Set`, unless marked as mutable with `markAsMutable` inside a mutation context (see [@monstermann/remmi](https://michaelostermann.github.io/remmi/#clonearray-array)).

::: code-group

```ts [data-first]
const original = new Set([1, 2, 3]);
const copy = clone(original); // Set { 1, 2, 3 }
```

```ts [data-last]
const original = new Set([1, 2, 3]);
const copy = pipe(original, clone()); // Set { 1, 2, 3 }
```

:::
