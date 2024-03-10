import { it, expect, describe, vi } from "vitest"
import { getRandomChar } from "."

describe("测试带有随机数的方法", () => {
  it("test getRandomChar", () => {
    /* vi.spyOn(Math, "random").mockImplementation(() => {
      return 0.1
    }) */
    vi.spyOn(Math, "random").mockImplementationOnce(() => {
      return 0.1
    })
    vi.spyOn(Math, "random").mockImplementationOnce(() => {
      return 0.2
    })
    const res = getRandomChar()
    expect(res).toBe("ba")
  })
})
