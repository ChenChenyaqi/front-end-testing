import { clone } from "lodash"

export function cloneObj(obj: Record<string, any>) {
  return clone(obj)
}
