export function getTodayEmo() {
  const date = new Date()
  const day = date.getDay()
  if (day === 5) {
    return "happy"
  } else {
    return "sad"
  }
}
