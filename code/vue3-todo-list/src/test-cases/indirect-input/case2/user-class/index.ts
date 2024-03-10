import User from "./User"

export function doubleUserAge(): number {
  const user = new User(4, "abc")
  return user.age * 2
}
