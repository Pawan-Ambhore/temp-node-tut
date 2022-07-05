const path = require("path");

console.log(path.sep);

const filePath = path.join("/contet", "subfolder", "text.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "contet", "subfolder", "text.txt");
console.log(absolute);
