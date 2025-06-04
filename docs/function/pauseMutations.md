# pauseMutations

Temporarily suspends the current mutation context for `fn`. Forwards the result of `fn`.

See ([@monstermann/remmi](https://michaelostermann.github.io/remmi/))

```ts
startMutations(() => {
    markAsMutable(target);
    isMutable(target); // true

    pauseMutations(() => {
        isMutable(target); // false
        markAsMutable(target);
        isMutable(target); // false
    });

    isMutable(target); // true
});
```
