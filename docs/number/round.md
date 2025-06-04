# round

`round(target)`

Returns `target` rounded to the nearest integer.

::: code-group

```ts [data-first]
round(4.3); // 4
round(4.7); // 5
round(-4.3); // -4
round(-4.7); // -5
```

```ts [data-last]
pipe(4.3, round()); // 4
pipe(4.7, round()); // 5
pipe(-4.3, round()); // -4
pipe(-4.7, round()); // -5
```

:::
