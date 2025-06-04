# titleCase

`titleCase(target)`

Converts `target` string to Title Case format.

::: code-group

```ts [data-first]
titleCase("hello world"); // "Hello World"
titleCase("hello-world"); // "Hello World"
```

```ts [data-last]
pipe("hello world", titleCase()); // "Hello World"
pipe("hello-world", titleCase()); // "Hello World"
```

:::
