# isMutating

Returns a boolean indicating whether a mutation context is currently available.

See ([@monstermann/remmi](https://michaelostermann.github.io/remmi/))

```ts
isMutating(); // false

startMutations(() => {
    isMutating(); // true
});

isMutating(); // false
```
