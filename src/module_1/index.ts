import { sum } from "./lesson_1/func"
import { handleInput } from "./lesson_1/from-event"

function start(): void {
  console.log("start index")
  sum(1, 2)
  handleInput()
}

start()

export { start }
