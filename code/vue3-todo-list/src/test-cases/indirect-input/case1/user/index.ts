export function getUserAge() {
  // 通过fetch获取，不确定是多少
  return 3
}

export function getUserAgePromise(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(3)
    }, 1000)
  })
}
