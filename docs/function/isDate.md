# isDate

`isDate(target)`

Checks if a value is a Date instance.

::: code-group

```ts [data-first]
isDate(new Date()); // true
isDate("2024-01-01"); // false
```

```ts [data-last]
pipe(new Date(), isDate()); // true
pipe("2024-01-01", isDate()); // false
```

:::
