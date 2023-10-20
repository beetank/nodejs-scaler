const path = require("path");

// method to get the extension of a particular file
console.log(path.extname("file.txt"));

// similarly to get the base name of a file
console.log(path.basename("file.txt"));

// to get the fullpath of a .js file
console.log(__filename);

// to get the current directory name (full)
console.log(__dirname);