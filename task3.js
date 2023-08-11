const fs = require("fs");
//create a file
fs.writeFile("./welcome.txt", "Hello Node all", (err) => {
  if (err) console.log("error");
  console.log("file created");
});

//reading an existing file
fs.readFile("./welcome.txt", "utf-8", (err, data) => {
  if (err) return console.log(err);
  console.log(data);
});
