# startMutations

Runs `fn` inside a new mutation context. Forwards the result of `fn`.

See ([@monstermann/remmi](https://michaelostermann.github.io/remmi/))

```ts
isMutable(target); // false

startMutations(() => {
    markAsMutable(target);
    isMutable(target); // true
    return true;
}); // true

isMutable(target); // false
```
