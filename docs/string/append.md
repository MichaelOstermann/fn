# append

`append(target, source)`

Appends `source` or strings from `source` iterable to the end of `target` string.

::: code-group

```ts [data-first]
append("hello", " world"); // "hello world"
append("hello", [" ", "world"]); // "hello world"
```

```ts [data-last]
pipe("hello", append(" world")); // "hello world"
pipe("hello", append([" ", "world"])); // "hello world"
```

:::
