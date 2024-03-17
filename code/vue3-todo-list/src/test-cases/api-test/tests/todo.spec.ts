import { it, expect, describe, vi, beforeEach } from "vitest"
import { addTodo, removeTodo, todos } from "../todo"
import { fetchAddTodo, fetchRemoveTodo } from "../api"

vi.mock("../api")

describe("测试API", () => {
  beforeEach(() => {
    todos.value = []
  })
  it("add todo", async () => {
    vi.mocked(fetchAddTodo).mockImplementation((title: string) => {
      return Promise.resolve({
        data: { todo: { id: 1, title } },
        state: 1,
      })
    })

    const title = "吃饭"
    await addTodo(title)
    expect(todos.value[0].title).toBe(title)
  })

  it("remove todo", async () => {
    todos.value.push({ id: 1, title: "111" })
    vi.mocked(fetchRemoveTodo).mockImplementation((id: number) => {
      return Promise.resolve({
        data: { id },
        state: 1,
      })
    })
    const id = 1
    await removeTodo(id)
    expect(todos.value.length).toBe(0)
  })

  it("remove throw error", () => {
    vi.mocked(fetchRemoveTodo).mockImplementation((id: number) => {
      return Promise.resolve({
        data: { id },
        state: 0,
      })
    })
    expect(async () => {
      await removeTodo(2)
    }).rejects.toThrowError("id:2 does not exist")
  })
})
