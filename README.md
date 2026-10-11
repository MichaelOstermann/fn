<div align="center">

<h1>fn</h1>

**A utility library for TypeScript.**

</div>

```ts
import "@monstermann/fn/globals";

function complete(tasks: Task[], id: string) {
    return Array.mapFirstWhere(
        tasks,
        (task) => task.id === id,
        (task) => Object.merge(task, { done: true }),
    );
}

function label(priority: number) {
    return match(priority).case(1, "urgent").case(2, "soon").unwrapOr("later");
}
```

What ends up in your bundle:

```ts
import { mapFirstWhere as _mapFirstWhere } from "@monstermann/fn/Array/mapFirstWhere.mjs";
import { merge as _merge } from "@monstermann/fn/Object/merge.mjs";

function complete(tasks: Task[], id: string) {
    return _mapFirstWhere(
        tasks,
        (task) => task.id === id,
        (task) => _merge(task, { done: true }),
    );
}

function label(priority: number) {
    return priority === 1 ? "urgent" : priority === 2 ? "soon" : "later";
}
```

`complete` returns `tasks` itself when there is no such task, or when it is done already.

- Functions are only added when the language has no equivalent: there is no `Array.find`, `tasks.find()` is the way.
- Functions return what they were given when nothing changed: `Array.map([1, 2, 3], (i) => i)` is the same array. A copy is only made once the first change is found. That keeps signals from firing and React from rendering for nothing. Is it needed, maybe not, but it costs nothing to have.
- Functions copy by default, and the ones for arrays take `{ mut: true }` for when things need to be fast.
- Functions live on the globals they belong to: `Array`, `Object`, `Map`, `Set`, `String`, `Math`, `Function`.
    - Native feel and convenient: the package ships the types, nothing has to be imported.
    - Small and safe: a build plugin replaces what you use with direct imports, so nothing is assigned to a global and nothing but what you use is bundled.
    - Discoverable: type `Array.` and see what is available, instead of dozens of unscoped functions you have to remember.
- `pipe`, `match`, `Result` and `Rect` are globals of their own.
- Everything is documented where it is declared, your editor shows it on hover.

## Installation

```sh
bun add @monstermann/fn
bun add -D @monstermann/fn-transform
```

Import `@monstermann/fn/globals` once, at the entry of your code, and add the plugin.

### Vite, Rolldown, tsdown

```ts
import { fn } from "@monstermann/fn-transform";

export default defineConfig({
    plugins: [fn({ enforce: "pre" })],
});
```

| Option    | Default                 | Description                                                            |
| --------- | ----------------------- | ---------------------------------------------------------------------- |
| `include` | `.js`, `.ts`, `.jsx`, … | RegExp(s), only files whose path matches are transformed.              |
| `exclude` |                         | RegExp(s), files whose path matches are skipped.                       |
| `enforce` |                         | `"pre"` or `"post"`.                                                   |
| `debug`   | `false`                 | `true` or a RegExp matching file paths, prints what is being replaced. |

Dependencies are always skipped: what a dependency uses of `Array` or `Object` is its own.

### Bun

```ts
import { fnBun } from "@monstermann/fn-transform";

await Bun.build({
    entrypoints: ["./src/index.ts"],
    plugins: [fnBun()],
});
```

A preload makes `bun test` and `bun run` go through the plugin as well:

```ts [preload.ts]
import { plugin } from "bun";
import { fnBun } from "@monstermann/fn-transform";

plugin(fnBun());
```

```toml [bunfig.toml]
preload = ["./preload.ts"]

[test]
preload = ["./preload.ts"]
```

Bun only uses the first plugin that loads a file. When there are others, call `transform(code, path)` from your own.

### Without the plugin

Import `@monstermann/fn/patch` instead of `@monstermann/fn/globals`. It assigns everything to the globals for real, and throws when a name is taken. That is meant for scripts and tests. `@monstermann/fn/globals` throws when the plugin did not run, instead of failing somewhere later.

I do not recommend shipping `@monstermann/fn/patch` in scenarios where you do not control the environment.

## Lessons learned

What I learned building this, maybe that is useful to somebody.

### Pattern matching

- [gvergnaud/ts-pattern](https://github.com/gvergnaud/ts-pattern) is a banger, probably the best type-safe pattern matching there is.
- It is going to show up in your performance profiles when you use it in a loop: 137 to 200 ns for a chain of three to six branches, where the conditional you would have written by hand takes 5 ns.
- This library ships a slimmed down, good enough matcher that the plugin compiles into that conditional:

    |                          | ts-pattern | `match` | `match`, compiled |
    | ------------------------ | ---------- | ------- | ----------------- |
    | six values               | 150 ns     | 11 ns   | 5 ns              |
    | three objects by a field | 137 ns     | 19 ns   | 5 ns              |
    | three tuples of two      | 200 ns     | 27 ns   | 6 ns              |

- A plugin that knows the types of what it transforms is not a thing yet in 2026, so this one does not know whether `a` in `.with(a, …)` is a value to compare with or an object to look into. That is why there is no `with`, you say what you mean: `case` compares with `===`, `shape` compares field by field, `cond` asks a function.

### Currying

I was a big fan of currying, in particular the "data-first / data-last" approach of Remeda and Effect: `Arr.find(tasks, isDone)` and `pipe(tasks, Arr.find(isDone))`. A couple of issues:

- Inconsistency
    - It is annoying to apply to your own functions, so you end up with code where some things are curried and some are not.
- Developer experience
    - It is done with overloads, and the errors are not great: you do not see what went wrong, you get a list of overloads your code does not match.
    - When the first step of a pipe is wrong, the error shows up on the second one.
    - Optional parameters are not straightforward.
    - Autocomplete assumes data-first until the whole call is written, and you can not hover a parameter to ask what it is.
- Bloat
    - You start building `Arr.find()`, which does nothing `tasks.find()` does not do, only so that there is a curried version. Of the 354 functions this library previously had, 100 were that.
    - It forces you to stick to functions, currying makes classes awkward.
- Speed
    - Not a big deal, but you pay for it on every call.

Functions are plain data-first now, and `pipe` takes lambdas. The plugin replaces a `pipe` call with the calls it makes, which takes it from 7.8 to 0.7 ns for three cheap steps.

### Variants

- Every function that can fail had three more: `findOr`, `findOrElse`, `findOrThrow`. That was another 133 of the 354.
- `??` does that: `tasks.find(isDone) ?? fallback`.

### Copy on write

Returning what you were given when nothing changed is only free when you look before you copy. It is tempting to copy first, and find out afterwards:

```ts
function map(target, fn) {
    let didChange = false;
    const result = target.map((before) => {
        const after = fn(before);
        didChange ||= before !== after;
        return after;
    });
    return didChange ? result : target;
}
```

That creates an array on every call, to throw it away whenever nothing changed. Copy once you know that there is something to write:

```ts
function map(target, fn) {
    let copy;
    for (let i = 0; i < target.length; i++) {
        const before = target[i];
        const after = fn(before);
        if (before === after) continue;
        // Copy once now that we know we are actually going to write:
        copy ??= [...target];
        copy[i] = after;
    }
    return copy ?? target;
}
```

### Mutations

A previous version built on [remmi](https://github.com/MichaelOstermann/remmi), which makes updates mutate inside of a scope:

```ts
withMutations(() => {
    const a = Arr.append([1, 2, 3], 4); // Copies
    const b = Arr.append(a, 5); // Mutates
});
```

- I thought this was pretty cool.
- Plot twist: it wasn't, I used it 6 times in an app that calls this library around 210 times.
- It took 13 files, and something every updating function had to ask on every call.
- Due to how it had to be typed, not a single function supported `readonly`.
- You should know your hot paths anyway. Copy once yourself, then mutate.

`{ mut: true }` is what is left of it: said per call instead of per scope, and a type error for a `readonly` array. It is up to 2.8 times as fast as copying.

```ts
const draft = [...tasks];
Array.removeAll(draft, done, { mut: true });
Array.mapFirstWhere(draft, (task) => task.id === id, rename, { mut: true });
```

Only arrays have it, as nothing native removes by value or maps in place. Maps, sets and objects need no option for that: `map.set()`, `set.add()`, `Object.assign()`.

### Globals

Utilities have to live somewhere, and every option has a price:

- Functions of their own (`removeAll`, `merge`): at some point two of them want the same name, and you are back to a prefix or suffix, `removeAllFromArray`.
- Namespaces of your own (`Arr.removeAll`), which is what this library had before: now there are three places to look for something that works on an array. Its methods, `Array`, and `Arr`.
- The globals that are there already (`Array.removeAll`): one place, which autocomplete knows about. The price is that you are patching globals.

Two things make the last one bearable:

- The plugin replaces every use with an import, so nothing is patched when the code runs.
- The types declare properties instead of methods. Should the language ship an `Array.removeAll` one day, that is a type error, and not silently another overload of it.

### OXC

The plugin is built on [OXC](https://oxc.rs): `oxc-parser` to read a file, `oxc-walker` to walk through it and to know what a name refers to, and `magic-string` to replace parts of it and get the source map for free. I am having a lot of fun with it lately, building transformations, tools and build-time optimizations.

- It is fast enough to not think about it: the 1,400 files of an app go through the plugin in about 0.2 seconds. Most of them are not even parsed, a look at the text tells whether there is anything to replace.
- It is easy. `match` and `pipe` are a few hundred lines each, and this is the kind of well-defined problem that is quick to vibe code: the input is code, the output is code, and whether it is right can be easily tested via snapshots.
- Replacing an abstraction at build time means you can have it for free. `match` is 2 to 4 times as fast compiled, `pipe` 11 times.
- What it can not do is know about types, it only sees what is written. Design around that, see pattern matching.

### Result

Nothing to explain here that has not been explained elsewhere, only what I ran into:

- As functions (`Result.map(result, fn)`): very verbose, very annoying to use to my surprise, because I generally prefer functions.
- As objects with methods (`result.map(fn)`): pretty banger, much more ergonomic.
    - The downside: a `ResultAsync` is not quite as interchangeable with a `Promise` as it was with functions.
- `Ok` and `Err` are upper case for a reason: with a global named `err`, every `catch` that forgot to name its error compiles.
- It is not about speed either way, an `Ok` instance costs 1 to 4 ns over returning a plain `{ ok, value }`.

Is it worth bringing results into a language that is not built around them (eg. making JavaScript more Rust-like)? Depends on where you are:

- Frontend: not really. Apart from `fetch` there is not much IO happening, and not much that can suddenly fail. It is more about rendering a fallback for something that is `null` or `undefined`, which `??` and `?.` do.
- Backend: yes. Databases, IO, processes, bad requests, validation, assertions, third-party code that throws from somewhere inside: all of that is pretty painful with exceptions, and decently manageable with results.

If results alone do not go far enough for you, there is [Effect](https://effect.website). It is too much for my taste: it almost turns JavaScript into another language, and everything you write has to be written its way. Maybe one day I will change my mind, kinda like I did with Tailwind.
