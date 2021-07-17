const path = require("path");
const http = require("http");
const fs = require("fs");

// fs.writeFile(path.join(path.dirname(__filename), "/about"));
// console.log(__dirname);
const server = http.createServer((req, res) => {
  //   if (req.url === "/") {
  //     fs.readFile(path.join(__dirname, "home.html"), (err, data) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "content-Type": "html" });
  //       res.end(data);
  //     });
  //   }
  //   if (req.url === "/home") {
  //     fs.readFile(path.join(__dirname, "public", "home.html"), (err, data) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "content-Type": "html" });
  //       res.end(data);
  //     });
  //   }
  //   if (req.url === "/about") {
  //     fs.readFile(path.join(__dirname, "public", "about.html"), (err, data) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "content-Type": "html" });
  //       res.end(data);
  //     });
  //   }
  //   if (req.url === "/user/bin") {
  //     const users = [
  //       { name: "Rahul Kumar", age: 23 },
  //       { name: "Ravi Kumar", age: 20 },
  //     ];
  //     res.writeHead(200, { "content-Type": "json" });
  //     res.end(JSON.stringify(users));
  //   }

  // File path
  let filepath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "home.html" : req.url
  );
  //   console.log(file_path);
  //   res.end();
  console.log(req.url);
  // Extension of file
  let extname = path.extname(filepath);

  // Initial content type
  let contentType = "text/html";

  // check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }
  // Read File

  fs.readFile(filepath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Some server error
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
