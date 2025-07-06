// Courtesy of Remeda: https://github.com/remeda/remeda/blob/main/packages/remeda/src/fromEntries.ts
import type { Simplify } from "type-fest"
import { dfdlT } from "@monstermann/dfdl"

type IterableContainer<T = unknown> = ReadonlyArray<T> | readonly []

type Entry<Key extends PropertyKey = PropertyKey, Value = unknown> = readonly [
  key: Key,
  value: Value,
]

type FromEntries<Entries> = Entries extends readonly [
    infer First,
    ...infer Tail,
]
    ? FromEntriesTuple<First, Tail>
    : Entries extends readonly [...infer Head, infer Last]
        ? FromEntriesTuple<Last, Head>
        : Entries extends IterableContainer<Entry>
            ? FromEntriesArray<Entries>
            : never

type FromEntriesTuple<E, Rest> = E extends Entry
    ? FromEntries<Rest> & Record<E[0], E[1]>
    : never

type FromEntriesArray<Entries extends IterableContainer<Entry>> =
  string extends AllKeys<Entries>
      ? Record<string, Entries[number][1]>
      : number extends AllKeys<Entries>
          ? Record<number, Entries[number][1]>
          : symbol extends AllKeys<Entries>
              ? Record<symbol, Entries[number][1]>
              : FromEntriesArrayWithLiteralKeys<Entries>

type FromEntriesArrayWithLiteralKeys<Entries extends IterableContainer<Entry>> =
  {
      [P in AllKeys<Entries>]?: ValueForKey<Entries, P>;
  }

type AllKeys<Entries extends IterableContainer<Entry>> = Extract<
    Entries[number],
    Entry
>[0]

type ValueForKey<
    Entries extends IterableContainer<Entry>,
    K extends PropertyKey,
> = (Extract<Entries[number], Entry<K>> extends never
    ? Entries[number]
    : Extract<Entries[number], Entry<K>>)[1]

/**
 * `fromEntries(entries)`
 *
 * Creates an object from an array of key-value pairs (entries). Each entry should be a tuple of [key, value].
 *
 * ```ts
 * fromEntries([
 *     ["a", 1],
 *     ["b", 2],
 *     ["c", 3],
 * ]); // { a: 1, b: 2, c: 3 }
 * ```
 *
 * ```ts
 * pipe(
 *     [
 *         ["a", 1],
 *         ["b", 2],
 *         ["c", 3],
 *     ],
 *     fromEntries(),
 * ); // { a: 1, b: 2, c: 3 }
 * ```
 */
export const fromEntries: {
    <const Entries extends IterableContainer<Entry>>(entries: Entries): Simplify<FromEntries<Entries>>
    (): <const Entries extends IterableContainer<Entry>>(entries: Entries) => Simplify<FromEntries<Entries>>
} = dfdlT((entries: any): any => {
    return Object.fromEntries(entries)
}, 1)
