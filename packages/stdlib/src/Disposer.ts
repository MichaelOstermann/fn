// Not every runtime knows disposables yet, for example the webview of Tauri on Linux.
(Symbol as { dispose: symbol }).dispose ??= Symbol.for("Symbol.dispose")

// Registered globally, so multiple copies of this package recognize each others disposers.
const brand: unique symbol = Symbol.for("@monstermann/stdlib/Disposer") as never

/** What a disposer can dispose: callbacks, other disposers, and everything else that is disposable. */
export type DisposerValue = (() => void) | Disposable | Disposer

/** Where a value sits in a disposer, which is what removes it without looking for it. */
export interface DisposerLink {
    disposer: Disposer
    nextDsp: DisposerLink | undefined
    nextVal: DisposerLink | undefined
    prevDsp: DisposerLink | undefined
    prevVal: DisposerLink | undefined
    val: DisposerValue
}

type DisposeStack =
    | undefined
    | { disposer: Disposer, prev: DisposeStack }

/**
 * # Disposer
 *
 * Collects callbacks, other disposers and everything else that is disposable,
 * and disposes them in reverse order.
 *
 * - A disposer that has been added to others is removed from them when it is disposed itself.
 * - What is added to a disposer that has been disposed already is disposed right away.
 * - Everything is disposed, also when something throws: one error is thrown as it is, several as an `AggregateError`.
 * - Works with `using`.
 *
 * ## Example
 *
 * ```ts
 * const a = new Disposer();
 * const b = new Disposer();
 *
 * a.add(() => console.log(1));
 * b.add(() => console.log(2));
 * a.add(b);
 *
 * a.dispose(); // 2, 1
 * a.disposed; // true
 * b.disposed; // true
 * ```
 */
export class Disposer implements Disposable {
    /** Whether this has been disposed. */
    disposed = false
    /** The last of the disposers this has been added to. */
    dsps: DisposerLink | undefined = undefined
    /** The last of the values that have been added. */
    vals: DisposerLink | undefined = undefined

    /** Whether `value` is a disposer, also one of another copy of this package. */
    static is(value: unknown): value is Disposer {
        return value != null && typeof value === "object" && brand in value
    }

    /** Removes what `link` points at from the disposer it has been added to. */
    static unlink(link: DisposerLink | undefined): void {
        if (!link) return
        unlinkVal(link)
        unlinkDsp(link)
    }

    /**
     * Adds something to dispose, and returns where it sits, for `Disposer.unlink`.
     * Returns nothing when there is nothing to remove later: `value` was disposed right away, or is this disposer itself.
     */
    add(value: DisposerValue): DisposerLink | undefined {
        if (Disposer.is(value)) {
            if (value === this || value.disposed) return
            if (this.disposed) return void value.dispose()
            return linkDsp(value, linkVal(this, createLink(this, value)))
        }
        if (this.disposed) return void (typeof value === "function" ? value() : value[Symbol.dispose]())
        return linkVal(this, createLink(this, value))
    }

    /** Disposes everything that has been added, the last first. */
    dispose(): void {
        let errors: unknown[] | undefined
        let stack: DisposeStack = { disposer: this, prev: undefined }
        let disposer: Disposer | undefined = stack.disposer

        while (disposer) {
            let child: Disposer | undefined
            disposer.disposed = true

            while (disposer.dsps) {
                unlinkVal(disposer.dsps)
                disposer.dsps = disposer.dsps.prevDsp
            }

            while (disposer.vals) {
                const val: DisposerValue = disposer.vals.val
                disposer.vals = disposer.vals.prevVal

                if (Disposer.is(val)) {
                    child = val
                    break
                }

                try {
                    if (typeof val === "function") val()
                    else val[Symbol.dispose]()
                }
                catch (error) {
                    errors ??= []
                    errors.push(error)
                }
            }

            // Continue with the child, to come back for the remaining values afterwards.
            if (child) stack = { disposer: child, prev: stack }
            else stack = stack?.prev
            disposer = stack?.disposer
        }

        if (!errors) return
        if (errors.length === 1) throw errors[0]
        throw new AggregateError(errors, "DisposeError")
    }

    /** Returns where `value` sits, when it has been added. */
    find(value: DisposerValue): DisposerLink | undefined {
        let link = this.vals
        while (link) {
            if (link.val === value) return link
            link = link.prevVal
        }
        return link
    }

    /** Whether `value` has been added. */
    includes(value: DisposerValue): boolean {
        return !!this.find(value)
    }

    /** Removes `value` without disposing it. */
    remove(value: DisposerValue): void {
        Disposer.unlink(this.find(value))
    }

    [Symbol.dispose](): void {
        this.dispose()
    }
}

Object.defineProperty(Disposer.prototype, brand, { value: true })

function createLink(disposer: Disposer, val: DisposerValue): DisposerLink {
    return {
        disposer,
        nextDsp: undefined,
        nextVal: undefined,
        prevDsp: undefined,
        prevVal: undefined,
        val,
    }
}

function linkVal(disposer: Disposer, link: DisposerLink): DisposerLink {
    link.prevVal = disposer.vals
    if (disposer.vals) disposer.vals.nextVal = link
    disposer.vals = link
    return link
}

function linkDsp(disposer: Disposer, link: DisposerLink): DisposerLink {
    link.prevDsp = disposer.dsps
    if (disposer.dsps) disposer.dsps.nextDsp = link
    disposer.dsps = link
    return link
}

function unlinkVal(link: DisposerLink): void {
    if (link.prevVal) link.prevVal.nextVal = link.nextVal
    if (link.nextVal) link.nextVal.prevVal = link.prevVal
    if (link.disposer.vals === link) link.disposer.vals = link.prevVal
    link.nextVal = link.prevVal = undefined
}

function unlinkDsp(link: DisposerLink): void {
    if (!Disposer.is(link.val)) return
    if (link.prevDsp) link.prevDsp.nextDsp = link.nextDsp
    if (link.nextDsp) link.nextDsp.prevDsp = link.prevDsp
    if (link.val.dsps === link) link.val.dsps = link.prevDsp
    link.nextDsp = link.prevDsp = undefined
}
