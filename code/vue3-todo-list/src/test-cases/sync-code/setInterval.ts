export function useSetInterval() {
  setTimeout(() => {
    setInterval(() => {
      console.log("hi")
    }, 100)
  }, 1000)
}
