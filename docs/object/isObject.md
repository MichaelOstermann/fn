# isObject

`isObject(target)`

Checks if `target` is a plain object.

::: code-group

```ts [data-first]
isObject({ a: 1 }); // true
isObject([]); // false
isObject(null); // false
isObject("hello"); // false
```

```ts [data-last]
pipe({ a: 1 }, isObject()); // true
pipe([], isObject()); // false
pipe(null, isObject()); // false
pipe("hello", isObject()); // false
```

:::
