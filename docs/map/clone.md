# clone

`clone(target)`

Creates a shallow copy of a `Map`, unless marked as mutable with `markAsMutable` inside a mutation context (see [@monstermann/remmi](https://michaelostermann.github.io/remmi/#clonearray-array)).

::: code-group

```ts [data-first]
const original = new Map([
    ["a", 1],
    ["b", 2],
]);

const copy = clone(original); // Map { 'a' => 1, 'b' => 2 }
```

```ts [data-last]
const original = new Map([
    ["a", 1],
    ["b", 2],
]);

const copy = pipe(original, clone()); // Map { 'a' => 1, 'b' => 2 }
```

:::
