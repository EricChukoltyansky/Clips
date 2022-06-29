import { interval, fromEvent, of, from } from "rxjs";
import { map, filter, scan, switchMap } from "rxjs/operators";

const observable = fromEvent(document, "keydown").pipe(pluck("code"));

const subscription = observable.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log("Complete");
  },
});

console.log("hello");
