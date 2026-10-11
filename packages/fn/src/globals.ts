import "./declarations"

/**
 * Makes the types of everything that is available on globals known: `Array.removeAll`, `Math.clamp`, …
 *
 * `@monstermann/fn-transform` replaces those with direct imports and removes the import of this file.
 * Nothing is available when the code runs without it, which is what is reported here,
 * unless `@monstermann/fn/patch` has been imported to make it available for real.
 */
if (!(Symbol.for("@monstermann/fn/patch") in globalThis)) {
    throw new Error("@monstermann/fn: @monstermann/fn-transform did not run, and @monstermann/fn/patch has not been imported.")
}
