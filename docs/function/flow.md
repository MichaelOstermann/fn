### flow

`flow(...fns)(input)`

A data-last version of `pipe` for use with functions that accept a function parameter (like `map`, `filter`, etc.).

```ts
import { flow, pipe } from "@monstermann/dfdl";

const increment = (x: number) => x + 1;
const double = (x: number) => x * 2;

flow(increment, double)(1); // 4

[1, 2, 3, 4].map(flow(increment, double)); // [4, 6, 8, 10]

// In comparison, `pipe` can feel too verbose:

[1, 2, 3, 4].map((num) => pipe(num, increment, double)); // [4, 6, 8, 10]
```
