import type { Dsp } from "."
import { dispose } from "./dispose"
import { symbol } from "./symbol"

function disposeSelf(this: Dsp): void {
    dispose(this)
}

/**
 * # create
 *
 * ```ts
 * function Dsp.create(): Dsp;
 * ```
 *
 * Creates a new `Dsp` instance.
 *
 * ## Example
 *
 * ```ts
 * import { Dsp } from "@monstermann/fn";
 *
 * const dsp = Dsp.create();
 * ```
 *
 */
export function create(): Dsp {
    return {
        dsps: undefined,
        [symbol]: false,
        [Symbol.dispose]: disposeSelf,
        vals: undefined,
    }
}
