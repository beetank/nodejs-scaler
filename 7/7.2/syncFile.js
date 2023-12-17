const fs = require("fs");

console.log("First line...");

// read synchronously
// let data = fs.readFileSync("file1.txt");
// console.log("File1 Content: " + data);

// read asynchronously
fs.readFile("file1.txt", callbFunc1); // works because of hoisting

function callbFunc1(err, data) {
    if (err) {
        console.log(err);
    }
    console.log("File1 Content: " + data)
}

fs.readFile("file2.txt", callbFunc2);

function callbFunc2(err, data) {
    if (err) {
        console.log(err);
    }
    console.log("File2 Content: " + data)
}

console.log("Second line....");