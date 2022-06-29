import { interval, fromEvent, of, from } from "rxjs";
import { map, filter, scan, switchMap, pluck, filter } from "rxjs/operators";

const observable = interval(500).pipe(take(),reduce((acc, curr) => acc + curr, 0));

const subscription = observable.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log("Complete");
  },
});

console.log("hello");
