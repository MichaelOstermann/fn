# groupBy

`groupBy(array, grouper, transform?)`

Groups elements in `array` by the result of calling `grouper` function on each element, optionally transforming each element with `transform`, returning an object with keys as group values and values as arrays of elements.

```ts
groupBy(
    [1, 2, 3, 4],
    (x) => (x % 2 === 0 ? "even" : "odd"),
    (x) => x * 10,
);
// { odd: [10, 30], even: [20, 40] }
```
