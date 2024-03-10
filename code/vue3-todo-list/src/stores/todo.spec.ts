import { beforeEach, describe, it, expect } from "vitest"
import { useTodoStore } from "./todo"
import { setActivePinia, createPinia } from "pinia"
import { createTodo } from "./helpers"
describe("test todo", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it("可以正常新增todo", () => {
    const { todos } = useTodoStore()
    const todo = createTodo("abc")
    expect(todo.title).toBe("abc")
    expect(todos[0]).toEqual(todo)
  })

  it("根据id能够查找到一个todo", () => {
    const { findTodo } = useTodoStore()
    const todo = createTodo("abc")
    const targetTodo = findTodo(todo.id)
    expect(todo).toEqual(targetTodo)
  })

  it("根据id删除一个todo", () => {
    const todoStore = useTodoStore()
    const todo = createTodo("abc")
    todoStore.removeTodo(todo.id)
    expect(todoStore.todos.length).toBe(0)
  })
})
