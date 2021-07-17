const path = require("path");
const fs = require("fs");

// fs.mkdir(path.join(path.dirname(__filename), "/test"), {}, function (err) {
//   if (err) throw err;
//   console.log("creaty a directory");
// });

// fs.writeFile(
//   path.join(path.dirname(__filename), "/test", "/read.txt"),
//   "Hi Rahul Kumar!",
//   (err) => {
//     if (err) throw err;
//     console.log("The file is created in read txt file ");
//   }
// );
// fs.appendFile(
//   path.join(path.dirname(__filename), "/test", "read.txt"),
//   "Ravi and Rahul are brother ",
//   (err) => {
//     if (err) throw err;
//     console.log("This file is append of the first file");
//   }
// );

// fs.readFile(
//   path.join(path.dirname(__filename), "/test", "/read.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );
fs.readlink(
  path.join(path.dirname(__filename), "/test"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);
