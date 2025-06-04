# map

`map(map, key, transform)`

Transforms the value at `key` in `map` using `transform`, returning a new map if the value changes.

::: code-group

```ts [data-first]
mapEntry(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
    (value) => value * 2,
); // Map(2) { "a" => 2, "b" => 2 }

mapEntry(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
    (value) => value * 2,
); // Map(2) { "a" => 1, "b" => 2 }
```

```ts [data-last]
pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    mapEntry("a", (value) => value * 2),
); // Map(2) { "a" => 2, "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    mapEntry("c", (value) => value * 2),
); // Map(2) { "a" => 1, "b" => 2 }
```
