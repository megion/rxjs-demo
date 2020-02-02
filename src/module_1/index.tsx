import { sum } from "./func"
import { handleInput } from "./input"

function start(): void {
  console.log("start index")
  sum(1, 2)
  handleInput()
}

start()

export { start }
