const fs = require("fs");

// reading using fs module
let file1Content = fs.readFileSync('file1.txt');

console.log("file1 content: " + file1Content);

// writing using fs module
fs.writeFileSync('file2.txt', "This is file2."); 
// ^ creates a file if it does'nt exist

// append using fs module
fs.appendFileSync('file2.txt', " This text was appended.");
// ^ also creates a file if it doesn't exist

// delete a file 
//fs.unlinkSync('file3.txt');