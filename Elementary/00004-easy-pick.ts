// https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.ja.md

type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}


/**
 * Typescriptのinには2種類ある。
 * 1. 式で使用するパターン
 * => オブジェクトのプロパティの有無を判定
 * 
 * 2. 型コンテキストで使用するパターン(Mapped types)
 * => [key in Keys] でKeysにユニオンを指定することでkeyとしてその一つ一つを取り出せる
 */