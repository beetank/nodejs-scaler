const fs = require("fs");

// to create a directory
// gives an error if directory exists already
fs.mkdirSync('newDir');

// to check the content of a directory
// for paths in windows use '\\' between directory separators 
// (as '\' is reseved as escape/newline probably)
let data = fs.readdirSync("../3.6");
console.log(data);

// to check if a directory exists or not (returns a boolean value)
// can be used for files as well
let ifexist = fs.existsSync("newDir");
console.log(ifexist);

// to delete a directory
fs.rmdirSync("newDir");