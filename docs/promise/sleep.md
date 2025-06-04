# sleep

`sleep(duration)`

Creates a promise that resolves after `duration` milliseconds.

::: code-group

```ts [data-first]
await sleep(1000); // waits 1 second
```

```ts [data-last]
pipe(1000, sleep()); // returns Promise<void>
```

:::
