export function useSetTimeout(callback: Function, delay: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      callback("callback执行")
    }, delay)
  })
}

export function useSetTimeout2(callback: Function) {
  return new Promise((resolve) => {
    setTimeout(() => {
      callback("callback执行")
    }, 1000)
  })
}

export function useSetTimeout3(callback: Function) {
  return new Promise((resolve) => {
    setTimeout(() => {
      setTimeout(() => {
        callback("callback执行")
      }, 400)
    }, 1000)
  })
}
