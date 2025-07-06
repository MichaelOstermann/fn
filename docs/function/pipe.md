### pipe

`pipe(input, ...fns)`

Pipes a value through a sequence of functions, passing the output of each function as input to the next.

```ts
import { pipe } from "@monstermann/dfdl";

const increment = (x: number) => x + 1;
const double = (x: number) => x * 2;

pipe(5, increment, double); // 12
```
