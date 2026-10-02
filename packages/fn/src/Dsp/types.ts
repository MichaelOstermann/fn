import type { symbol } from "./symbol"

export interface Dsp extends Disposable {
    dsps: DspLink | undefined
    [symbol]: boolean
    vals: DspLink | undefined
}

/** What a disposer can dispose: callbacks, other disposers, and everything else that is disposable. */
export type DspValue = (() => void) | Dsp | Disposable

export interface DspLink {
    disposer: Dsp
    nextDsp: DspLink | undefined
    nextVal: DspLink | undefined
    prevDsp: DspLink | undefined
    prevVal: DspLink | undefined
    val: DspValue
}
