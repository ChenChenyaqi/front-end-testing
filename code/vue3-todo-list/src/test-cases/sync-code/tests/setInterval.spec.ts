import { it, expect, describe, vi } from "vitest"
import { useSetInterval } from "../setInterval"

describe("测试setInterval", () => {
  it("should call one", () => {
    vi.useFakeTimers()
    vi.spyOn(console, "log")

    useSetInterval()
    // vi.advanceTimersByTime(100)  // 通过
    // vi.advanceTimersToNextTimer() // 通过
    vi.advanceTimersByTime(1100)

    expect(console.log).toBeCalledWith("hi")
  })
})
