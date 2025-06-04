# split

`split(target, source)`

Splits `target` string into an array of substrings using `source` string or regular expression as the separator.

::: code-group

```ts [data-first]
split("hello,world,test", ","); // ["hello", "world", "test"]
split("hello world", /\s+/); // ["hello", "world"]
```

```ts [data-last]
pipe("hello,world,test", split(",")); // ["hello", "world", "test"]
pipe("hello world", split(/\s+/)); // ["hello", "world"]
```

:::
