type MyPick<T, K extends keyof T> = { [P in K]: T[P] }
// [P in K] means the key of MyPick is in K, K might have several keys
// T[P] turned out is a type, use P as key in T, and the value is type here, that type become the type that MyPick need, and pair with key

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
    Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
    // @ts-expect-error
    MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
    title: string
    description: string
    completed: boolean
}

interface Expected1 {
    title: string
}

interface Expected2 {
    title: string
    completed: boolean
}

// in operator https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing
// extend keyword https://www.typescriptlang.org/docs/handbook/2/classes.html#extends-clauses
// keyof operator https://www.typescriptlang.org/docs/handbook/2/keyof-types.html#the-keyof-type-operator

function useInOperator(params: Expected1 | Expected2) {
    if ('completed' in params) {
        return 'It is Expected2';
    }

    return 'It is Expected1';
}

function useExtendKeyword(params: Expected1 | Expected2) {
    interface exf extends Todo {

    }

    let foo: exf;
    let bar: exf;
    console.log(foo.completed);
    // keyof operator
    type P = keyof exf;
    // keyValuePair type
    type keya = keyof exf;
    type keys = & keyof exf;
    // It looks like they are the same thing, but why I can not use the first one in generic
    type keyValuePair = {
        [K in keya]: exf[K]
    }
    let kv: keyValuePair = { title: 'foo', completed: false, description: 'bar' }


}