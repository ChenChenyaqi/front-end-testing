import { sendEmail } from "./emailService"
import { checkStock } from "./inventoryService"

export class OrderProcessor {
  processOrder(order: any) {
    const isOk = checkStock(order)
    if (isOk) {
      sendEmail()
    }
  }
}
