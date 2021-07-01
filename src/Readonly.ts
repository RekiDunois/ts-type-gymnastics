type MyReadonly<T> = {
    readonly [K in keyof T]: T[K]
}
// you can not use K in T directly, you need to use keyof to le K know what it is in

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
    title: string
    description: string
    completed: boolean
    meta: {
        author: string
    }
}