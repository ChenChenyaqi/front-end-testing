import { ref } from "vue"
import { fetchAddTodo, fetchRemoveTodo } from "./api"

interface TodoItem {
  id: number
  title: string
}

export const todos = ref<TodoItem[]>([])

export async function addTodo(title: string) {
  if (!title) return null
  const { data, state } = await fetchAddTodo(title)

  const todo = createTodoItem(data.todo.id, data.todo.title)
  if (state) {
    todos.value.push(todo)
  }
  return todo
}

export async function removeTodo(id: number) {
  const { data, state } = await fetchRemoveTodo(id)

  if (state === 0) {
    throw new Error(`id:${id} does not exist`)
  }

  const todoItem = findTodo(data.id)
  if (state) {
    if (todoItem) {
      todos.value = todos.value.filter((todoItem) => {
        return todoItem.id !== id
      })
    }
  }
  return todoItem
}

export function findTodo(id: TodoItem["id"]) {
  return todos.value.find((todoItem) => {
    return todoItem.id === id
  })
}

function createTodoItem(id: number, title: string) {
  return {
    id,
    title,
  }
}
