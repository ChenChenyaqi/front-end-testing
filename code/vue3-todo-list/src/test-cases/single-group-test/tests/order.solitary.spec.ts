import { it, expect, describe, vi } from "vitest"
import { OrderProcessor } from "../orderProcessor"
import { sendEmail } from "../emailService"

vi.mock("../emailService.ts", () => {
  return {
    sendEmail: vi.fn(),
  }
})

vi.mock("../inventoryService.ts", () => {
  return {
    checkStock() {
      return true
    },
  }
})

describe("独居测试", () => {
  it("should ", () => {
    const order = new OrderProcessor()
    order.processOrder({ name: "hei", count: 1 })
    expect(sendEmail).toBeCalled()
  })
})
