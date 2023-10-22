# nodejs-scaler
Node.js, Express.js project to learn backend development from Scaler by Mrinal Bhattacharya

## Module 3: Node Module System

### 3.1 The global object
- Like 'window.name' in a browser 'global.name' is not defined within a filename because of modular system of Node.js.
- Contents are containerized in a file's scope and objects are not added universally.

### 3.2 Modules and Modularity
- Contents of each file/ the file itself won't affect each other.
- Contents can be shared. Suppose we have one file 'calculator.js' and one 'test.js' then content among these files can be shared by doing this:
```js
// calculator.js
// --------------
function add(a, b) {
    console.log(a + b);
} 

module.exports = {
    addition: add
}

// test.js
// --------------
const calculator = require("./calculator");

calculator.addition(3, 4); // O/P: 7
```
### 3.3 Child Process Module
- Child process is a node module which is used to create a sub-process within a script. (Refer folder 3/3.3).

### 3.4 OS Module
- Used to get info about the system in which environment is being run. (Refer folder 3/3.4).

### 3.5 Path Module
- Used to deal with paths of files and folders. (Refer folder 3/3.5).

### 3.6 FS Modules with Files
- Used to manipulate/create files in the system. (Refer folder 3/3.6).

### 3.7 FS Modules with Directories
- Used to manipulate/create folders/directories in the system. (Refer folder 3/3.7).

## Module 4: Node Package Manager(NPM)

### 4.1 Introduction to NPM
- Basically a store to install various modules as per requirement.
- Completely OpenSource and you can publish your own modules as well.
- Info is available on https://www.npmjs.com

### 4.2 How to install and use NPM Packages
- To start a npm project
```
$ npm init
```
- Some questions will be asked fill them up
- Now to install a package use
```
$ npm i figlet
```
- 'figlet' is the package name