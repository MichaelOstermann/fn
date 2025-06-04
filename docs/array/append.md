# append

`append(array, value)`

Appends `value` to the end of `array`.

::: code-group

```ts [data-first]
append([1, 2, 3], 4); // [1, 2, 3, 4]
```

```ts [data-last]
pipe([1, 2, 3], append(4)); // [1, 2, 3, 4]
```

:::
