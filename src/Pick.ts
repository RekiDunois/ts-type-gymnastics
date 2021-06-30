type MyPick<T, K extends T> = { [P in K]: T[P] }


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
    interface exFromTodo extends Todo {

    }

    let foo: exFromTodo;
    let bar: exFromTodo;
    console.log(foo.completed);
    // keyof operator
    type P = keyof exFromTodo;
    // keyValuePair type
    // type keyValuePair = { [key: string]: number };
    interface NumberKey {
        12: string
    }
    type keys = 'string';
    type keyValuePair = {
        [K in keys]: exFromTodo
    }
    let kv: keyValuePair = { 'string': foo, 'strings': bar }


}