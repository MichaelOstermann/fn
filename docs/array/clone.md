# clone

`clone(array)`

Creates a shallow copy of `array`, unless marked as mutable with `markAsMutable` inside a mutation context (see [@monstermann/remmi](https://michaelostermann.github.io/remmi/#clonearray-array)).

::: code-group

```ts [data-first]
clone([1, 2, 3, 4]); // [1, 2, 3, 4]
```

```ts [data-last]
pipe([1, 2, 3, 4], clone()); // [1, 2, 3, 4]
```

:::
