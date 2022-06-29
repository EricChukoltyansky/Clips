import { interval, fromEvent, of, from } from "rxjs";
import { map, filter, scan, switchMap, pluck, filter } from "rxjs/operators";

const observable = fromEvent(document, "keydown").pipe(
  pluck("code"),
  filter((key) => key === "Space")
);

const subscription = observable.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log("Complete");
  },
});

console.log("hello");
