type TupleToObject<T extends readonly any[]> = {
    [P in T[number]]: P
}
// so P in T could refer that all the things in T, like foreach? Just tell the compiler how to index T (in this case, use number as index type)

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type cases = [
    Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
]

type error = TupleToObject<[[1, 2], {}]>

let writeable = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type foo = typeof tuple;

type tesla = any;

type bar = ['tesla', 'model 3', 'model X', 'model Y'];

interface rio {
    'tesla',
    'model 3',
    'model X',
    'model Y'
}

type you = rio;

let a: rio;

a[1] = 'model 3';