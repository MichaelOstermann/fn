<div align="center">

<h1>fn</h1>

**A utility library for TypeScript.**

</div>

```ts
import { Arr, pipe } from "@monstermann/fn";

// Data-first
Arr.at([1, 2, 3], -1); // 3

// Data-last
pipe([1, 2, 3], Arr.at(-1)); // 3
```

## Installation

```sh
bun add @monstermann/fn
bun add -D @monstermann/fn-transform
```

Everything is exported from the root, grouped into namespaces. [`@monstermann/fn-transform`](../fn-transform) replaces what you use with direct imports at build time, so the size of the namespaces does not end up in your bundle.

## Namespaces

| Namespace | Functions | Description                                         |
| --------- | --------- | --------------------------------------------------- |
| `Arr`     | 153       | Arrays.                                             |
| `Obj`     | 28        | Objects.                                            |
| `Str`     | 62        | Strings.                                            |
| `Num`     | 38        | Numbers.                                            |
| `Maps`    | 48        | Maps.                                               |
| `Sets`    | 25        | Sets.                                               |
| `Async`   | 5         | `debounce`, `throttle`, `queue`, `limit`, `wait`.   |
| `Rect`    | 85        | Rectangles: `{ left, top, width, height }`.         |
| `Dsp`     | 10        | Disposers that can be nested and used with `using`. |
| `Dll`     | 36        | Doubly-linked lists.                                |

Each function is documented where it is declared, your editor shows it on hover and in autocomplete.

## Functions

| Export                                        | Description                                                                           |
| --------------------------------------------- | ------------------------------------------------------------------------------------- |
| `pipe`, `flow`                                | Pass a value through a sequence of functions.                                         |
| `dfdl`, `dfdlT`                               | Create functions that can be called data-first and data-last.                         |
| `match`                                       | Pattern matching, compiled into conditional expressions by the transform.             |
| `withMutations`, `cloneArray`, `isMutable`, … | Mutate copies in place while inside a mutation context, instead of cloning each time. |

## Immutability

Functions that change something return a copy and leave the original untouched, or return the original when nothing changed. Inside `withMutations`, copies that have been created there are mutated in place:

```ts
import { Arr, withMutations } from "@monstermann/fn";

const a = [1, 2, 3];
const b = Arr.append(a, 4); // A copy.
const c = Arr.append(a, 5); // Another copy.

withMutations(() => {
    const d = Arr.append(a, 4); // A copy.
    const e = Arr.append(d, 5); // The same array as d.
});
```
