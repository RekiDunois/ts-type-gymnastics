type Includes<T extends readonly any[], U> = U extends T[keyof T] ? true : false;
// https://github.com/type-challenges/type-challenges/issues/2066
// I can understand what is he doing, but I can not understand why he doing things like this.
// extends really equals to equal

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
    Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,
    Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
    Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
    Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
    Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
    Expect<Equal<Includes<[{}], { a: 'A' }>, false>>,
    Expect<Equal<Includes<[{ a: 'A' }], { a: 'A' }>, true>>,
    Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
]