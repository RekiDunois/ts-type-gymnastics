type First<T extends any[]> = T extends never[] ? never : T[0];
// never https://www.typescriptlang.org/docs/handbook/2/functions.html#never
// so [] does not mean never, casue it is an empty array, but it is an never[]

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<First<[3, 2, 1]>, 3>>,
    Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
    Expect<Equal<First<[]>, never>>,
    Expect<Equal<First<[undefined]>, undefined>>,
    Expect<Equal<rio, 3>>
]

let foo: First<[3, 2, 1]>
foo[3];

type bar = typeof foo

type rio = [];