import { ctx } from "./internals/ctx"

/**
 * # endMutations
 *
 * ```ts
 * function endMutations(): void;
 * ```
 *
 * Ends the current mutation context. Must be paired with `startMutations`.
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
 * startMutations();
 * markAsMutable(target);
 * isMutable(target); //=> true
 *
 * startMutations();
 * isMutable(target); //=> true
 * endMutations();
 *
 * isMutable(target); //=> true
 * endMutations();
 *
 * isMutating(); //=> false
 * isMutable(target); //=> false
 * ```
 *
 */
export function endMutations(): void {
    ctx.stack.pop()
    ctx.current = ctx.stack.at(-1)
}
