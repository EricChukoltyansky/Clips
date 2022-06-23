import { interval, fromEvent, of, from } from "rxjs";

// const observable = of(1, 2, 3, 4, 5);
const observable = from(fetch("https://jsonplaceholder.typicode.com/todos/1"));

const subscription = observable.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log("Complete");
  },
});

console.log("hello");
