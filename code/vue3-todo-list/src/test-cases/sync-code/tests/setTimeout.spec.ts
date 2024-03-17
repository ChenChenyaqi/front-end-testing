import { it, expect, describe, vi } from "vitest"
import { useSetTimeout, useSetTimeout2, useSetTimeout3 } from "../setTimeout"

describe("测试setTimeout", () => {
  it("跳过单个setTimeOut，指定跳过的时间 advanceTimersByTime ", () => {
    vi.useFakeTimers()
    const callback = vi.fn()
    useSetTimeout(callback, 100)

    vi.advanceTimersToNextTimer()

    expect(callback).toBeCalledWith("callback执行")
  })

  it("跳过单个setTimeOut advanceTimersToNextTimer ", () => {
    vi.useFakeTimers()
    const callback = vi.fn()
    useSetTimeout2(callback)

    vi.advanceTimersToNextTimer()

    expect(callback).toBeCalledWith("callback执行")
  })

  it("执行所有timeOut runAllTimers ", () => {
    vi.useFakeTimers()
    const callback = vi.fn()
    useSetTimeout3(callback)

    vi.runAllTimers()

    expect(callback).toBeCalledWith("callback执行")
  })
})
