import { getUserAge, getUserAgePromise } from "./user"

export function doubleUserAge() {
  return getUserAge() * 2
}

export async function doubleUserAgePromise() {
  return (await getUserAgePromise()) * 2
}

export function doubleUserName() {
  const username = getUserName()
  return username + username
}

function getUserName() {
  return "abcd"
}
