export function getRandomChar() {
  const chars = ["a", "b", "c", "d", "e", "f", "g", "h"]
  const randomNum = Math.floor(Math.random() * chars.length)
  console.log("random num1: ", randomNum)

  const randomNum2 = Math.floor(Math.random() * chars.length)
  console.log("random num2: ", randomNum2)
  return chars[randomNum] + chars[randomNum2]
}
