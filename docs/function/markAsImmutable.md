# markAsImmutable

Marks the provided value as immutable in the current mutation context.

See ([@monstermann/remmi](https://michaelostermann.github.io/remmi/))

```ts
startMutations(() => {
    isMutable(value); // false
    markAsMutable(value);
    isMutable(value); // true
    markAsImmutable(value);
    isMutable(value); // false
});
```
