type MyOmit<T, P> = {
  [key in keyof T as key extends P ? never : key]: T[key] 
} 

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}