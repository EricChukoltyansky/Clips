import { interval, fromEvent, of, from } from "rxjs";
import {
  map,
  filter,
  scan,
  switchMap,
  pluck,
  filter,
  tap,
  mergeMap,
} from "rxjs/operators";

const observable = fromEvent(button, "click").pipe(
  mergeMap(() => from(fetch("https://jsonplaceholder.typicode.com/todos/1")))
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
