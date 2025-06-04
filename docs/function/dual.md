# dual

Creates a function that can be used in a data-first or data-last style, making it suitable for usage in `pipe` or `flow`.

The first parameter to `dual` is the arity of the uncurried function.

```ts
const sum = dual<
    (b: number) => (a: number) => number,
    (a: number, b: number) => number
>(2, (a, b) => a + b);

sum(2, 3); // 5
pipe(2, sum(3)); // 5
```

```ts
const sum: {
    (b: number): (a: number) => number;
    (a: number, b: number): number;
} = dual(2, (a: number, b: number): number => a + b);

sum(2, 3); // 5
pipe(2, sum(3)); // 5
```
