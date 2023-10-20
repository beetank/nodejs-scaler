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