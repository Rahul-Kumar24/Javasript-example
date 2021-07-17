const url = require("url");

const myURL = new URL(
  "https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash"
);

console.log(URL === require("url").URL);

// url.hash

// console.log(myURL.hash);

console.log(myURL.href);
console.log(myURL.toString());
console.log(myURL.protocol);
console.log(myURL.host);
console.log(myURL.hostname);
console.log(myURL.port);
console.log(myURL.pathname);
console.log(myURL.search);
console.log(myURL.hash);
console.log(myURL.password);
myURL.password = "123";
myURL.port = "8000";
myURL.protocol = "https";
console.log(myURL.href);
console.log(myURL.origin);
console.log(myURL.port);
console.log(myURL.protocol);
console.log(myURL.search);

const myURLs = [
  new URL("https://www.example.com"),
  new URL("https://test.example.org"),
];
console.log(JSON.stringify(myURLs));
