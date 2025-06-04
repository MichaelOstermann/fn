# InferOk

`InferOk<T>`

Extracts `Ok` values from any combination of results, including asynchronous ones:

```ts
// boolean | string
type Example = InferOk<Ok<boolean> | Result<string, string>>;
```
