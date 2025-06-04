# isEmpty

`isEmpty(target)`

Checks if `target` object has no enumerable properties.

::: code-group

```ts [data-first]
isEmpty({}); // true
isEmpty({ a: 1 }); // false
```

```ts [data-last]
pipe({}, isEmpty()); // true
pipe({ a: 1 }, isEmpty()); // false
```

:::
