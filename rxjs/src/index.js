import { interval, fromEvent, of } from "rxjs";

const observable = of(1, 2, 3, 4, 5);

const subscription = observable.subscribe({
  next: (x) => console.log("next: ", x),
  error: (err) => console.log("error: ", err),
  complete: () => console.log("complete"),
});

console.log("hello");
