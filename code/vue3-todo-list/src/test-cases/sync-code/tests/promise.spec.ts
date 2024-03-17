import { it, expect, describe, vi } from "vitest"
import { View, delay, usePromise } from "../promise"

describe("处理promise", () => {
  it("normal", async () => {
    const r = await usePromise()
    expect(r).toBe("1")
  })

  it("delay", () => {
    const r = delay(1000)
    expect(r).resolves.toBe("ok")
  })

  it("嵌套", async () => {
    const view = new View()
    view.render()
    await flushPromise()
    expect(view.count).toBe(3)
  })
})

async function flushPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    })
  })
}
