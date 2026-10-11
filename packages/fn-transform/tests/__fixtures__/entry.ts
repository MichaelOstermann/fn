import "@monstermann/fn/globals"

export const result = pipe(
    [{ height: 1, left: 0, top: 0, width: 1 }, Rect.origin],
    rects => Array.map(rects, rect => match(Rect.area(rect)).case(1, "one").unwrapOr("other")),
    values => Array.removeAll(values, ["other"]),
    values => Ok(values[0]).unwrapOrElse(() => "none"),
)
