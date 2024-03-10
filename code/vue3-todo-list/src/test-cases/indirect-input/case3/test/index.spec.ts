import { it, expect, describe, vi, afterEach } from "vitest"
import { doubleUserAge } from "../env/process"
import { doubleUserAgeImport } from "../env/import"
import { doubleHeight, doubleUserAgeGlobal } from "../global"

describe("env环境变量", () => {
  afterEach(() => {
    vi.unstubAllEnvs()
  })
  it("通过process.env", () => {
    // process.env.USER_AGE = "2"  这种直接赋值不方便，因为会破坏原有的值
    vi.stubEnv("USER_AGE", "2")
    const res = doubleUserAge()
    expect(res).toBe(4)
  })

  it("通过import.meta.env", () => {
    vi.stubEnv("VITE_USER_AGE", "2")
    const res = doubleUserAgeImport()
    expect(res).toBe(4)
  })
})

describe("global全局变量", () => {
  it("global age", () => {
    vi.stubGlobal("cxr", { age: 2 })
    const res = doubleUserAgeGlobal()
    expect(res).toBe(4)
  })

  it("global innerHeight", () => {
    vi.stubGlobal("innerHeight", "2")
    const res = doubleHeight()
    expect(res).toBe(4)
  })
})
