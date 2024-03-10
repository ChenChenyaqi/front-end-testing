import { useTodoStore } from "../todo"

export function createTodo(title: string) {
  const { addTodo, todos } = useTodoStore()
  const todo = addTodo(title)
  return todo
}
