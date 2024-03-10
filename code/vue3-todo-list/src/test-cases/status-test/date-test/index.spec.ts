import { it, expect, describe, vi, beforeEach, afterEach } from "vitest"
import { getTodayEmo } from "."

describe("带有日期的方法", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })
  it("test getTodayEmo", () => {
    vi.setSystemTime("2024-03-08")
    const emo = getTodayEmo()
    expect(emo).toBe("happy")
  })

  it("现在的日期", () => {
    const emo = getTodayEmo()
    expect(emo).toBe("sad")
  })
})
