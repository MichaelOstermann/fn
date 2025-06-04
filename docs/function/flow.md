# flow

A dataLast version of `pipe` that could be used to provide more complex
computations to functions that accept a function as a param (like `map`,
`filter`, `groupBy`, etc.).

```ts
const increment = (x: number) => x + 1;
const double = (x: number) => x * 2;
[1, 2, 3, 4].map(flow(increment, double)); // => [4, 6, 8, 10]
```
