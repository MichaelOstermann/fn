# invoke

`invoke(method, args)`

Invokes a method on an object with the provided arguments.

::: code-group

```ts [data-first]
invoke("Hello World", "split", [" "]); // ["Hello", "World"]
```

```ts [data-last]
pipe("Hello World", invoke("split", [" "])); // ["Hello", "World"]
```

:::
