// https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.md

type MyExclude<T, U> = T extends U ? never : T

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'