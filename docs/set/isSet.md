# isSet

`isSet(target)`

Checks if the `target` value is a Set instance. Returns `true` if the value is a Set, `false` otherwise.

::: code-group

```ts [data-first]
isSet(new Set([1, 2, 3])); // true
isSet([1, 2, 3]); // false
isSet({}); // false
```

```ts [data-last]
pipe(new Set([1, 2, 3]), isSet()); // true
pipe([1, 2, 3], isSet()); // false
pipe({}, isSet()); // false
```

:::
