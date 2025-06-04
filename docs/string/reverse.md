# reverse

`reverse(target)`

Reverses the characters in `target` string.

::: code-group

```ts [data-first]
reverse("hello world"); // "dlrow olleh"
reverse("abc"); // "cba"
```

```ts [data-last]
pipe("hello world", reverse()); // "dlrow olleh"
pipe("abc", reverse()); // "cba"
```

:::
