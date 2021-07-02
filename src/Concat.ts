type Concat<T extends any[], U extends any[]> = [...T, ...U];
// destructuring tuple https://www.typescriptlang.org/docs/handbook/variable-declarations.html#tuple-destructuring

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Concat<[], []>, []>>,
    Expect<Equal<Concat<[], [1]>, [1]>>,
    Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
    Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]

let foo: Concat<[1, 2], [3, 4]>;

type bar = typeof foo;