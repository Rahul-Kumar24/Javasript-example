const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("event", () => {
  console.log("an event occurred!");
});
myEmitter.emit("event");

myEmitter.on("event", function (a, b) {
  console.log(a, b, this, this === myEmitter);
  // Prints:
  //   a b MyEmitter {
  //     domain: null,
  //     _events: { event: [Function] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined } true
});
myEmitter.emit("event", "a", "b");

myEmitter.on("event", (a, b) => {
  console.log(a, b, this);
  // Prints: a b {}
});
myEmitter.emit("event", "a", "b");

let m = 0;
myEmitter.on("event", () => {
  console.log(++m);
});
myEmitter.emit("event");
// Prints: 1
myEmitter.emit("event");
// Prints: 2
