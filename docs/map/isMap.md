# isMap

`isMap(target)`

Checks if `target` is a Map instance.

::: code-group

```ts [data-first]
isMap(new Map()); // true
isMap({}); // false
isMap([]); // false
```

```ts [data-last]
pipe(new Map(), isMap()); // true
pipe({}, isMap()); // false
pipe([], isMap()); // false
```

:::
