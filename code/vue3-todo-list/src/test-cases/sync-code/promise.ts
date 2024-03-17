export function usePromise() {
  return new Promise((resolve) => {
    resolve("1")
  })
}

export function delay(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("ok")
    }, time)
  })
}

export class View {
  count: number = 1
  render() {
    Promise.resolve()
      .then(() => {
        this.count = 2
      })
      .then(() => {
        this.count = 3
      })
  }
}
