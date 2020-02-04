import { Observable, Observer } from "rxjs"
//import { switchMap } from "rxjs/operators"

export function createObservable(): void {
  /**
   * Create an observable that emits 'Hello' and 'World' on subscription.
   */
  const hello = Observable.create(function(observer: Observer<string>) {
    observer.next("Hello")
    observer.next("World")
    //observer.complete()
    setTimeout(() => {
      observer.next("bla bla")
      observer.complete()
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
}
