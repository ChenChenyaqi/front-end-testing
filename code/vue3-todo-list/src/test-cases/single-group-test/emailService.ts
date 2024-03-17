import axios from "axios"

export function sendEmail() {
  axios.get("/sendEmail")
}
