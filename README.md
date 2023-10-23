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
- 'figlet' is the package 

### 4.3 About .gitignore
- A special file used in git version control.
- It tells which files are needed to be ignored while being pushed to the repository.
- For e.g. there is no point in uploading the 'node_modules' folder as people can download the dependencies themselves using 'package.json' file.

### 4.4 Semantic Versioning
- Versioning is mostly done in this format '^x.y.z' e.g. '^1.5.2'
- 'x' represents major release, 'y' represents minor release and 'z' represents patches.
- '^'(Caret) character represents that for a particular project only this major release version should be used.
- '~'(Tilde) character represents that for a particular project only this exact major and minor release versions should be used upto some patch. e.g '~1.0.4'(means upto 1.0.4).

### 4.5  Publish NPM Package
- Create npm account and add it with
```
$ npm adduser
```
- Now to publish your package/module use
```
$ npm publish
```
## Module 5: Express

### 5.1 Introduction to Express
- Express is a framework built for Node.js. Used for server-side development.
- Features:
    - Fast in the sense of development by removing boilerplate and saving time.
    - Middlewares: For handling requests efficiently and in an organized manner.
    - Routing: Handling urls according to requests. (GET, POST, PUT, etc.)
    - Templates and Scalability.

### 5.2 Express installation
```
$ npm i express
```

### 5.3 Express Usage
- Refer 5/5.3