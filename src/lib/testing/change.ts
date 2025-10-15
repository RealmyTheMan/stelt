import { count } from "./count.js";

export function setCountTo(value: number) {
  count.now = value;
}
