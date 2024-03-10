import { defineStore } from "pinia"
import { ref } from "vue"
import { parseCommand } from "./command"
import { createTodoItem } from "./todoItem"

export interface TodoItem {
  id: number
  title: string
}

type Todos = TodoItem[]

// let isAdded = false;

export function reset() {
  // isAdded = false
}

export const useTodoStore = defineStore("todo", () => {
  const todos = ref<Todos>([])

  function addTodo(title: string) {
    const todo = createTodoItem(title)
    todos.value.unshift(todo)
    return todo
  }

  function removeTodo(id: number) {
    const res = todos.value.filter((todo) => todo.id !== id)
    console.log("res:", res)
    todos.value = res
    console.log("todos: ", todos.value)
  }

  function findTodo(id: TodoItem["id"]) {
    return todos.value.find((todo) => todo.id === id)
  }

  return {
    todos,
    addTodo,
    removeTodo,
    findTodo,
  }
})
