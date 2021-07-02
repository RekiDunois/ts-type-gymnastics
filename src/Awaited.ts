type Awaited<T extends Promise<any>> = T extends Promise<infer R> ? R : never;
// infer keyword https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types
// infer makes a conditional expression

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{ field: number }>

type cases = [
    Expect<Equal<Awaited<X>, string>>,
    Expect<Equal<Awaited<Y>, { field: number }>>,
]

// @ts-expect-error
type error = Awaited<Promise<number>>