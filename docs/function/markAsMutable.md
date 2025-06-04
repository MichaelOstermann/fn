# markAsMutable

Marks the provided value as mutable in the current mutation context.

See ([@monstermann/remmi](https://michaelostermann.github.io/remmi/))

```ts
startMutations(() => {
    isMutable(value); // false
    markAsMutable(value);
    isMutable(value); // true
});
```
