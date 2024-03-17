import { it, expect, describe, vi } from "vitest"
import { cloneObj } from ".."

vi.mock("../index.ts")
describe("测试引入了node_modules外部模块的代码", () => {
  it("test cloneObj", () => {
    vi.mocked(cloneObj).mockReturnValueOnce({ name: "123" })
    const sourceObj = { name: "chen", age: 24 }
    const targetObj = cloneObj(sourceObj)
    expect(targetObj).toEqual({ name: "123" })
  })
})
