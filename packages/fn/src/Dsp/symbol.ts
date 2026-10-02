// Not every runtime knows disposables yet, for example the webview of Tauri on Linux.
(Symbol as { dispose: symbol }).dispose ??= Symbol.for("Symbol.dispose")

// Registered globally, so multiple copies of this module recognize each others disposers.
export const symbol: unique symbol = Symbol.for("@monstermann/fn/Dsp") as never
