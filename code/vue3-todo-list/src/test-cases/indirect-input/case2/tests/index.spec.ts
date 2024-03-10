import { it, expect, describe, vi } from "vitest"
import { doubleUserAge } from "../user"
import { doubleUserAge as doubleUserAgeClass } from "../user-class"
import axios from "axios"
import { config } from "../user-object/config"
import { tellActAge, tellAge } from "../user-object"
import { tellName } from "../user-constant"

vi.mock("axios")

describe("第三方模块的处理 axios", () => {
  it("axios", async () => {
    vi.mocked(axios).mockResolvedValue({
      name: "chen",
      age: 2,
    })
    const res = await doubleUserAge()
    expect(res).toBe(4)
  })
})

describe("测试全局对象方式", () => {
  it("修改全局对象的属性", () => {
    config.allowTellAge = false

    const res = tellAge()
    expect(res).toBe("就不告诉你")
  })

  it("修改全局对象的方法", () => {
    config.getAge = () => {
      return 2
    }
    const res = tellActAge()

    expect(res).toBe("no")
  })
})

describe("测试类的形式", () => {
  vi.mock("../user-class/User", () => {
    return {
      default: class User {
        age: number = 2

        getAge() {
          return 2
        }
      },
    }
  })
  it("属性", () => {
    const res = doubleUserAgeClass()
    expect(res).toBe(4)
  })

  it("方法", () => {
    const res = doubleUserAgeClass()
    expect(res).toBe(4)
  })
})

describe("测试常量的形式", () => {
  vi.mock("../user-constant/constant", async (importOriginal) => {
    const config = importOriginal()
    return {
      ...config,
      name: "ABC",
    }
  })
  it("常量", () => {
    const res = tellName()
    expect(res).toBe("ABC-hihi")
  })
})
