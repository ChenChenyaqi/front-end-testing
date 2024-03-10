import { it, expect, describe, vi } from "vitest"
import { doubleUserAge, doubleUserAgePromise, doubleUserName } from ".."
import { getUserAge } from "../user"

// stub 存根
// 替换掉真实的逻辑实现
vi.mock("../user", () => {
  return {
    getUserAge: () => 2,
    getUserAgePromise: () => Promise.resolve(2),
  }
})

// vi.mock("../user")

vi.mock("..", () => {
  return {
    getUserName: () => "abc",
  }
})

describe("间接输入", () => {
  it("测试年龄", () => {
    // vi.mocked(getUserAge).mockReturnValue(2)
    const res = doubleUserAge()

    expect(res).toBe(4)
  })

  it("测试年龄异步", async () => {
    const res = await doubleUserAgePromise()

    expect(res).toBe(4)
  })

  it.skip("测试名字", () => {
    const res = doubleUserName()
    expect(res).toBe("abcabc")
  })
})
