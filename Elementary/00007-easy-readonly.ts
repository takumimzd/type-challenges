// https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.ja.md

type MyReadonly<T> = {
  readonly [key in keyof T]: T[key]
}

interface Todo {
  title: string
  description: string
}

const todoReadnly: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}