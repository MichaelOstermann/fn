# compact

`compact(array)`

Removes all nullable values from `array`.

::: code-group

```ts [data-first]
compact([1, null, undefined]); // [1]
```

```ts [data-last]
pipe([1, null, undefined], compact()); // [1]
```

:::
