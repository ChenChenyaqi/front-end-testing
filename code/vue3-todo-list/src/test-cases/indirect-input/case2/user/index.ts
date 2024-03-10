import axios from "axios"

interface User {
  name: string
  age: number
}

export async function doubleUserAge() {
  const user: User = await axios("/user/1")
  return user.age * 2
}
