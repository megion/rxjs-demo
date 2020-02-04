import { sum } from "./lesson_1/func"
import { handleInput } from "./lesson_1/from-event"
import { createObservable } from "./lesson_1/create-observable"

function start(): void {
  console.log("start index")
  sum(1, 2)
  handleInput()
  createObservable()
}

start()

export { start }
