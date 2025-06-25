# isImmutable

Returns a boolean indicating whether the provided value has not been marked as mutable.

See ([@monstermann/remmi](https://michaelostermann.github.io/remmi/))

```ts
isImmutable(value); // true

startMutations(() => {
    isImmutable(value); // true
    markAsMutable(value);
    isImmutable(value); // false
    unmarkAsMutable(value);
    isImmutable(value); // true
});

isImmutable(value); // true
```
