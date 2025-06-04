# pipe

Pipes the value of an expression into a pipeline of functions.

The `pipe` function is a utility that allows us to compose functions in a
readable and sequential manner. It takes the output of one function and
passes it as the input to the next function in the pipeline. This enables us
to build complex transformations by chaining multiple functions together.

```ts
const result = pipe(input, func1, func2, ..., funcN)
```

In this syntax, `input` is the initial value, and `func1`, `func2`, ...,
`funcN` are the functions to be applied in sequence. The result of each
function becomes the input for the next function, and the final result is
returned.

Here's an illustration of how `pipe` works:

```
┌───────┐    ┌───────┐    ┌───────┐    ┌───────┐    ┌───────┐    ┌────────┐
│ input │───►│ func1 │───►│ func2 │───►│  ...  │───►│ funcN │───►│ result │
└───────┘    └───────┘    └───────┘    └───────┘    └───────┘    └────────┘
```

It's important to note that functions passed to `pipe` must have a **single
argument** because they are only called with a single argument.

This is useful in combination with data-last functions as a simulation of
methods:

```ts
as.map(f).filter(g);
```

becomes:

```ts
pipe(as, map(f), filter(g));
```

```ts
const increment = (x: number) => x + 1;
const double = (x: number) => x * 2;
pipe(5, increment, double); // 12
```
