import { fromEvent, Observable } from "rxjs"
import { switchMap } from "rxjs/operators"
//import { Observable } from "rxjs/Observable"

export function handleInput(): void {
  const myInput: HTMLElement | null = document.querySelector("#myinput")

  console.log("myInput", myInput)
  if (!myInput) {
    return
  }
  console.log("myInput", myInput)
  const observable: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(
    myInput,
    "input",
  )
  console.log("observable", observable)
  observable.pipe(
    switchMap((event: KeyboardEvent) => {
      console.log("event", event)
      //return fetch("")
      return new Promise(function(resolve, reject) {
        setTimeout(() => {
          resolve("myresult")
        }, 1000)
      })
    }),
  ).subscribe((result) => {
      console.log("result", result)
  })
}
