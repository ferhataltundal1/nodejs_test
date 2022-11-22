const os = require("os");
const path = require("path");

console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log(os.networkInterfaces()["Wi-Fi"][1].address);
console.log(__dirname);
console.log(__filename);
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));

const fs = require("fs");

fs.readFile("./text.txt", "utf8", (error, data) => {
  console.log(data.toString());
});
fs.writeFile("./text.txt", "utf8", (error, data) => {
  console.log((data = "Deneme"));
});

console.log("Tester");
