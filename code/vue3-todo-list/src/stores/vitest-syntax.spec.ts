import { beforeEach, it, describe, beforeAll } from "vitest"

beforeAll(() => {
  console.log("before all")
  return () => {
    console.log("after all")
  }
})

beforeEach(() => {
  console.log("before each")
  return () => {
    console.log("after each")
  }
})

it("test", () => {
  console.log("it")
})

describe("sub-desc", () => {
  beforeAll(() => {
    console.log("sub before all")
    return () => {
      console.log("sub after all")
    }
  })

  it("sub test", () => {
    console.log("sub it")
  })

  beforeEach(() => {
    console.log("sub before each")
    return () => {
      console.log("sub before each")
    }
  })
})
