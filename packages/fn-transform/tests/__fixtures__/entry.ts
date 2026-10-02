import { Arr, match, pipe } from "@monstermann/fn"

export const result = pipe(
    [1, 2, 3],
    Arr.mapEach(value => match(value).case(1, "one").or("other")),
    Arr.at(0),
)
