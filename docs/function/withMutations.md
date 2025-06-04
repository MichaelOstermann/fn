# withMutations

Like `startMutations`, but reuses the current mutation context if available.

See ([@monstermann/remmi](https://michaelostermann.github.io/remmi/))

```ts
withMutations(() => {
    markAsMutable(target);
    isMutable(target); // true

    withMutations(() => {
        isMutable(target); // true
        unmarkAsMutable(target);
    });

    isMutable(target); // false
});
```
