
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