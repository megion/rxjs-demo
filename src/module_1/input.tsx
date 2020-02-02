import { fromEvent, Observable } from "rxjs"
import { switchMap } from "rxjs/operators"
//import { Observable } from "rxjs/Observable"

export function handleInput(): void {
  const myInput: HTMLElement | null = document.querySelector("myinput")

  if (!myInput) {
    return
  }
  const observable: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(
    myInput,
    "input",
  )
  observable.pipe(
    switchMap((event: KeyboardEvent) => {
      return fetch("")
    }),
  )
}
