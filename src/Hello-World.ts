import { Equal, NotAny, Expect } from "@type-challenges/utils";

type HelloWorld = any;

type cases = [
    Expect<NotAny<HelloWorld>>,
    Expect<Equal<HelloWorld, string>>
]