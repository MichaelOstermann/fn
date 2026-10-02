import { ctx } from "./internals/ctx"

/**
 * # startMutations
 *
 * ```ts
 * function startMutations(): void;
 * ```
 *
 * Starts a mutation context, reusing the current one if already active. Must be paired with `endMutations`.
 *
 * ## Example
 *
 * ```ts
 * import {
 *     startMutations,
 *     endMutations,
 *     markAsMutable,
 *     isMutable,
 *     isMutating,
 * } from "@monstermann/fn";
 *
 * isMutating(); //=> false
 *
 * startMutations();
 * isMutating(); //=> true
 * markAsMutable(target);
 * isMutable(target); //=> true
 * endMutations();
 *
 * isMutating(); //=> false
 * isMutable(target); //=> false
 * ```
 *
 */
export function startMutations(): void {
    ctx.current ??= new WeakSet()
    ctx.stack.push(ctx.current)
}
