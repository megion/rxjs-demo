import { Observable, Observer, of, throwError } from "rxjs"
//import { switchMap } from "rxjs/operators"

export function createObservable(): void {
  /**
   * Create an observable that emits 'Hello' and 'World' on subscription.
   */
  const hello = Observable.create(function(observer: Observer<string>) {
    observer.next("Hello")
    //throw Error("my error")
    observer.next("World")
    //observer.complete()
    setTimeout(() => {
      try {
        throw Error("my error")
        observer.next("bla bla")
        observer.complete()
      } catch (err) {
        observer.error(err)
      }
    }, 1000)
  })

  console.log("just before subscribe")
  hello.subscribe({
    next(x: string) {
      console.log("got value " + x)
    },
    error(err) {
      console.error("something wrong occurred: " + err)
    },
    complete() {
      console.log("done")
    },
  })
  console.log("just after subscribe")

  // create Observable from object.
  // like Promise.resolve
  const observableOf = of(4)
  observableOf.subscribe({
    next(x: number) {
      console.log("observableOf: next value: " + x)
    },
    error(err) {
      console.error("observableOf: error: " + err)
    },
    complete() {
      console.log("observableOf: complete")
    },
  })
  observableOf.subscribe((x: number) => {
    console.log("observableOf2: next value: " + x)
  })
  console.log("after subscribe observableOf")

  // demo throwError
  const myError = throwError("My error")
  myError.subscribe({
    next(x: number) {
      console.log("myError: next value: " + x)
    },
    error(err) {
      console.error("myError: error: " + err)
    },
    complete() {
      console.log("myError: complete")
    },
  })
}
