# isMutable

Returns a boolean indicating whether the provided value has been marked as mutable.

See ([@monstermann/remmi](https://michaelostermann.github.io/remmi/))

```ts
isMutable(value); // false

startMutations(() => {
    isMutable(value); // false
    markAsMutable(value);
    isMutable(value); // true
    unmarkAsMutable(value);
    isMutable(value); // false
});

isMutable(value); // false
```
