# isPrimitive

`isPrimitive(value)`

Checks if a value is a primitive type (string, number, boolean, null, undefined, symbol, bigint).

::: code-group

```ts [data-first]
isPrimitive("hello"); // true
isPrimitive(42); // true
isPrimitive({}); // false
isPrimitive([]); // false
```

```ts [data-last]
pipe("hello", isPrimitive()); // true
pipe({}, isPrimitive()); // false
```

:::
