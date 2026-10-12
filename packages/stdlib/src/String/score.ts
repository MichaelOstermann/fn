const MATCH = 16
const GAP_START = -3
const GAP_EXTENSION = -1
/** For a character at the start of a word. */
const BOUNDARY = 8
/** For the very first character. */
const START = 10
/** For a character where the case changes, or digits start: the `W` of `helloWorld`. */
const CAMEL = 7
/** For a character right after another one that matched. */
const CONSECUTIVE = 4
const NONE = Number.NEGATIVE_INFINITY

// What a character is, to tell where words start.
const OTHER = 0
const LOWER = 1
const UPPER = 2
const DIGIT = 3

// Reused between calls: the scores and the characters in a row of the row before, the same of the current row, and what a match is worth where.
let size = 0
let previousScores = new Float64Array(0)
let previousRuns = new Int32Array(0)
let scores = new Float64Array(0)
let runs = new Int32Array(0)
let bonuses = new Int32Array(0)

/**
 * # score
 *
 * ```ts
 * function String.score(haystack: string, needle: string): number
 * ```
 *
 * Tells how well `needle` is found in `haystack`, for searching while typing: `0` when its characters are not all there in that order, and up to `1` the better they are.
 *
 * - case is ignored
 * - characters in a row are better than ones that are apart
 * - characters at the start of a word are better than ones in the middle of it: after a space or punctuation, and where `camelCase` changes
 * - the very start is the best place to be found
 * - of two that match as well, the shorter haystack is better
 *
 * The best way to place the characters is found, not the first one. An empty `needle` is found in everything.
 *
 * ## Example
 *
 * ```ts
 * String.score("Settings", "set"); // 0.94
 * String.score("Reset password", "set"); // 0.59
 * String.score("openFile", "of"); // 0.81
 * String.score("Settings", "xyz"); // 0
 *
 * const results = items
 *     .map(item => ({ item, score: String.score(item.title, query) }))
 *     .filter(result => result.score > 0)
 *     .sort((a, b) => b.score - a.score);
 * ```
 *
 */
export function score(haystack: string, needle: string): number {
    if (!needle.length) return 1
    if (needle.length > haystack.length) return 0

    const text = haystack.toLowerCase()
    const query = needle.toLowerCase()
    const n = text.length
    const m = query.length

    // Most haystacks do not have the characters at all.
    for (let i = 0, from = 0; i < m; i++) {
        from = text.indexOf(query[i]!, from) + 1
        if (!from) return 0
    }

    if (n > size) {
        size = n
        previousScores = new Float64Array(n)
        previousRuns = new Int32Array(n)
        scores = new Float64Array(n)
        runs = new Int32Array(n)
        bonuses = new Int32Array(n)
    }

    // Lowercasing can change how long a string is, where there is no telling which character became which.
    const cased = haystack.length === n ? haystack : text
    let before = OTHER
    for (let j = 0; j < n; j++) {
        const kind = kindOf(cased.charCodeAt(j), cased[j]!)
        bonuses[j] = j === 0
            ? START
            : kind === OTHER || before === OTHER
                ? BOUNDARY
                : (before === LOWER && kind === UPPER) || (before !== DIGIT && kind === DIGIT) ? CAMEL : 0
        before = kind
    }

    let best = NONE

    for (let i = 0; i < m; i++) {
        const character = query.charCodeAt(i)
        let left = NONE
        let isGap = false
        best = NONE

        for (let j = 0; j < n; j++) {
            // Moving on without matching here.
            const gap = left === NONE ? NONE : left + (isGap ? GAP_EXTENSION : GAP_START)

            let match = NONE
            let run = 0
            if (text.charCodeAt(j) === character) {
                const diagonal = i === 0 ? 0 : j === 0 ? NONE : previousScores[j - 1]!
                if (diagonal !== NONE) {
                    run = (i === 0 || j === 0 ? 0 : previousRuns[j - 1]!) + 1
                    let bonus = bonuses[j]!
                    if (run > 1) {
                        const first = bonuses[j - run + 1]!
                        // A new word starts in the middle of a run, which counts from here on.
                        if (bonus >= BOUNDARY && bonus > first) run = 1
                        else bonus = Math.max(bonus, CONSECUTIVE, first)
                    }
                    // Where the first character is found matters twice as much.
                    match = diagonal + MATCH + (i === 0 ? bonus * 2 : bonus)
                }
            }

            if (match !== NONE && match >= gap) {
                scores[j] = match
                runs[j] = run
                isGap = false
            }
            else {
                scores[j] = gap
                runs[j] = 0
                isGap = true
            }

            left = scores[j]!
            if (left > best) best = left
        }

        const swapScores = previousScores
        previousScores = scores
        scores = swapScores
        const swapRuns = previousRuns
        previousRuns = runs
        runs = swapRuns
    }

    if (best === NONE) return 0

    // Everything in a row, from the very start.
    const perfect = m * (MATCH + START) + START
    // Found, however far apart, is more than not found.
    const quality = Math.max(best, 1) / perfect
    return quality * (0.9 + 0.1 * m / n)
}

function kindOf(code: number, character: string): number {
    if (code >= 97 && code <= 122) return LOWER
    if (code >= 65 && code <= 90) return UPPER
    if (code >= 48 && code <= 57) return DIGIT
    if (code < 128) return OTHER
    // Letters without case are part of a word as well.
    if (character !== character.toLowerCase()) return UPPER
    return /[\p{L}\p{N}]/u.test(character) ? LOWER : OTHER
}
