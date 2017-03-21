const express = require("express"),
  app = express(),
  bodyParser = require("body-parser");

app.use(express.static("./public/"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

let id = 2;

const users = [
  { id: 0, name: "Sam", age: 21 },
  { id: 1, name: "Samantha", age: 22 }
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/user", (req, res) => {
  const user = req.body;

  user.id = id++;
  users.push(user);

  res.send(user);
});

app.delete("/user/:userId", (req, res) => {
  let id = parseFloat(req.params.userId, 10);

  let index = users.findIndex(user => user.id === id);

  users.splice(index, 1);

  res.send(users);
});


// const server = http.createServer((request, response) => {
//   console.log("Connected", request.headers);

//   generateResponse(request.url).
//     then(res => {
//       response.setHeader("content-type", res.contentType);
//       response.end(res.data);
//     }).
//     catch(status => {
//       response.statusCode = status;
//       response.end();
//     });
// });

// function generateResponse(url) {
//   if(url === "/") url = "/index.html"

//   return new Promise(function(resolve, reject) {
//     fs.readFile(`${__dirname}/server/public${url}`, "utf8", (err, data) => {
//       if(err) return reject(404);

//       let contentType = null,
//         ext = path.extname(url);

//       switch(ext) {
//         case ".html":
//           contentType = "text/html";
//           break;
//         case ".css":
//           contentType = "text/css";
//           break;
//         case ".js":
//           contentType = "application/javascript";
//           break;
//         default: contentType = "text/html"
//       }

//       console.log(contentType, data);

//       resolve({data, contentType});
//     });
//   });
// }

app.listen(3300, () => {
  console.log("Listen 3300");
});