# nodejs-scaler
Node.js, Express.js repo to learn backend development from Scaler by Mrinal Bhattacharya

## Contents
1. [`Module 1: Introduction`](#module-1-introduction)
2. [`Module 2: Getting Started with Node.js`](#module-2-getting-started-with-nodejs)
3. [`Module 3: Node Module System`](#module-3-node-module-system)
4. [`Module 4: Node Package Manager(NPM)`](#module-4-node-package-managernpm)
5. [`Module 5: Express`](#module-5-express)
6. [`Module 6: Middlewares`](#module-6-middlewares)
7. [`Module 7: Asynchronous Programming`](#module-7-asynchronous-programming)
8. [`Module 8: CRUD with MongoDB & Mongoose`](#module-8-crud-with-mongodb--mongoose)
9. [`Module 9: Data Validation in MongoDB`](#module-9-data-validation-in-mongodb)
10. [`Module 10: Model Relationships by Building APIs`](#module-10-model-relationships-by-building-apis)

## Module 1: Introduction
- Nothing much in this module. Just the instructor introduces the course.

## Module 2: Getting Started with Node.js

### 2.1 Introduction to Node.js
- Created by Ryan Dahl in 2009.
- Node.js is open-source, cross-platform JS runtime environment for executing code outside of the browser.
- Widely used to build back-end services for Client Side Applications, like creating APIs, building authentication systems, File Handling and communicating to the Database.
- Used to build data-intensive, highly Scalable and real-time Web Apps.
- Why to use Node.js?
    - Superfast and Highly Scalable. JS everywhere.
    - Consistent and clean codebase.
    - Huge community support.
    - Large ecosystem of open-source libs (NPM).
- Features:
    - Single-threaded, Asynchronous, Event driven, NPM, Highly Scalable.
    - Performance (C++ and V8 Engine)

### 2.2 Installation
- Simply download and install from [`nodejs.org`](https://nodejs.org/en).

### 2.3 First Program
- A file named `test.js`.
```js
// console.log(window); // gives error as it doesn't exist like in browsers
console.log(global); // it is somewhat similar to 'window' object in browsers
```
- Run `test.js` with
```sh
$ node test.js
```

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
- Refer 5/5.3 please

### 5.4 Nodemon
- Stands for 'node-mon'itor
- Used for testing and debugging.
- There is no need to refresh again and again after changes
- Installation: 
```
$ npm -i nodemon
```
- Usage:
```
$ nodemon app.js
```
- Setup package.json:
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon app.js",
    "start": "node app.js"
},
```
```sh
$ npm start dev
```

### 5.5 Port Environment Variable
- Used when dynamic port generation during hosting
- Ex:
```js
const port = process.env.PORT || 5000; // taking care of dynamic port assignment
app.listen(port, () => console.log(`App listening on port ${port}`));
```

### 5.6 Route parameters &
### 5.7 Handling Multiple Routes
```js
app.get('/courses/:id', (req, res) => {
    let course = courses.find(course => course.id === parseInt(req.params.id));

    if (!course)
    {
        res.status(404).send("Course not found!");
    }
    else
    {
        res.send(course.name);
    }
})
```
### 5.8 Postman (Tool to send post requests)
- For sending POST requests use Postman. Download & Use.
- P.S: ThunderClient is lighter than Postman and available on VSCode. 

### 5.9 POST(CREATE), PUT(UPDATE) & DELETE(DELETE) HTTP methods
- Refer 5/5.3

## Module 6: Middlewares

### 6.1 What are Middlewares?
- Heart of Express.
- Middlewares are the reason why Express is so popular.
- Whenever a request is made, it won't produce a response immediately.
- A response will be passed to multiple middlewares before producing a response.
- They are similar to functions and one middleware transfers control to another.
- In 5/5.3 `express.json()` is used, it's a middleware used to parse data in JSON.

### 6.2 Custom Middleware
- We can make our own middlewares.
- `next` parameter must be used to transfer control.
- We should store our middlewares in different files inside a 'middleware' folder.
- Refer `5/5.3/middlewares` and `5/5.3/app.js`

### 6.3 Third-Party Middlewares
- Visit [`express.js`](https://expressjs.com/en/resources/middleware.html) website for info about middlewares.
- We have used a simple middleware `morgan` in 5/5.3
- It is used to generate log of requests in the console.

## Module 7: Asynchronous Programming

### 7.1 Introduction
- Synchronous means in sequence and Asynchronous means without sequence or maybe simultaneously.
- Synchronous programming is not very efficient, while Asynchronous programming is.
- As some requests may take a long time to respond it's better to run other tasks concurrently. (Non-Blocking Code)
- Asynchronous Programming saves time but utilizes more resources.
- JavaScript is a single threaded programming language but still capable of Asynchronous programming.

### 7.2 Reading files, Synchronously & Asynchronously
- We can read files using 'fs' module as previously mentioned.
- `readFileSync()` for reading synchronously and `readFile()` for asynchronously.
- Similar syntax for other file operations.
- `readFile()` requires a callback function as used in `7/7.2`.

### 7.3 Understanding Event Loop & Previous Module (7.2)
- `Call Stack`: The call stack is used by JavaScript to keep track of multiple function calls. We use call stack for memorizing which function is running right now. [`GFG`](https://www.geeksforgeeks.org/what-is-the-call-stack-in-javascript/)
- `Callback`: A callback is any function that is a parameter of an async function, which the async function invokes to complete its operation.
- Non-async functions will directly execute from the call stack. (e.g. `console.log("First Line...")`)
- Call Stack doesn't execute async functions. It sends it to `Node APIs`.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/peetank/nodejs-scaler/blob/main/images/diagram-dark.png" height="650px">
  <img alt="Diagram1" src = "https://github.com/peetank/nodejs-scaler/blob/main/images/diagram-light.png" height = "650px" >
</picture>

- Async functions are later on loaded onto the `Call Queue` in a random order. 
- If you run multiple times `7/7.2/syncFile.js`, you will see File2 data might appear above File1's.
- Then the `Event Loop` makes sure that the call stack is empty and starts loading the async functions from the callback queue onto the call stack, execution happens and when the call stack is empty sends the next async function from the queue.
- [`Verbose Explanation`](https://www.webdevolution.com/blog/Javascript-Event-Loop-Explained)

### 7.4 Serial Execution of Async Code
- There will be times when we need our Async code to run serially.
- For that just nest the calls of Async functions.
- But this might lead to `"Callback Hell"` or `"Callback Pyramid of Doom"`.
- Refer Line 17 in `7/7.2/syncFile.js`.

### 7.5 `setTimeout` & `setInterval`
- `setTimeout()` is an async function.
- Syntax: 
```js 
setTimeout(cb, 2000); 
// cb = callback function
// 2000 = Time in ms after which cb should be called
// Refer 7/7.5/example1.js
``` 
- `setInterval()` is an async function.
- This function defines an interval after which a function should be run.
- Syntax:
```js 
setInterval(cb, 1000); 
// cb = callback function
// 2000 = Time in ms after which cb should be called again and again
// above syntax will make the cb run infinitely
```  
- Use `clearInterval()` to make the infinite loop break. It is used with `setTimeout()` i.e. to stop the `setInterval()` after some time specified.
- Refer `7/7.5/example2.js`.

### 7.6 Promises in JavaScript
- A promise is an assurance or guarantee that something will happen in the future.
- In JavaScript, a Promise is an object that will produce a single value some time in the future. A promise is a placeholder for the future result of an asynchronous operation.
- Promises help in dealing with callback hell.
- Promises have three states:
    - `pending`: This is the default state of a defined promise
    - `fulfilled`:  This is the state of a successful promise (using `.then()`)
    - `rejected`: This is the state of a failed promise (using `.catch()`)
- Refer `7/7.6/promisesExample.js`

### 7.7 Promises and Async/Await
- We are using a 'Coffee Shop' analogy to understand.
    - Two Promises are needed here:
        - One for getting a token which will ultimately get us coffee.
        - Second for the processing time of the order.
    - When second promise is resolved we will get our coffee served.
- Basically we are `Chaining Promises` in `7/7.7/coffeePromise.js`. But it can get tedious if there are many promises in the chain.
- `async/await` are syntactical sugar for promises. They work the same as normal promises, but syntax is simpler or more intuitive.
- `async` is used with functions where promises and asynchronous nature is involved.
- `await` will wait for our "promisified" functions to complete.`await` can only be used inside `async` functions.
- With `async/await` we can eliminate `chaining` for cleaner code.
- To handle errors in `async/await` we use `try/catch` block.
- Refer `7/7.7/coffeePromise.js`.

### 7.8 Microtask Queue
- Microtask Queue has higher priority than Task Queue(Callback Queue).
- Microtask Queue handles Promises and Task Queue handles Callbacks.
- Promises code is executed first, then callback code

## Module 8: CRUD with MongoDB & Mongoose

### 8.1 MongoDB and Mongoose Introduction
-  `MongoDB` is NoSQL (Not-only SQL).
- Install the community server edition from [`mongodb.com`](https://www.mongodb.com/try/download/community).
- Set it up in Windows by adding path and creating storage directory etc. idk I use linux. :P
- `Mongoose` is an API/Bridge that helps in easy communication with MongoDB.
- Read more about [`Mongoose`](https://mongoosejs.com).
- Installation: ```$ npm install mongoose```
- Usage:
```js
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testDB")
.then(() => {
    console.log("Connection Successful!");
})
.catch((err) => {
    console.log("Couldn't connect!", err);
})
```
### 8.2 Schemas and Models
- Although MongoDB is Schema-less DBMS. Having a schema doesn't hurt.
- So we can have best of both worlds with Mongoose schemas.
- Refer `/mongoConnection`.
- Refer the above mentioned file for Comparison Operators.

## Module 9: Data Validation in MongoDB

### 9.1 Data Validation in MongoDB
- It is very important to have required data when it is added in the database.
- But one can submit empty or incomplete documents.
- Hence `Data Validation` is necessary
- We can achieve this by adding `required: true` key when specifying the schema.

```js
// Schemas in Mongoose
const courseSchema = new mongoose.Schema({
    name: {type: String, required: true}, 
    // 'required: true/false' can also be used
)};
```

### 9.2 Inbuilt Data Validators
- We can various inbuilt data validators.
- For String `minlength` and `maxlength`.
- We can use `enum` to validate certain data as well.
- We can use our functions.
- Refer `mongoConnection/index.js`.

### 9.3 Custom data Validators
- Many times we need custom validation.
- This can be done using `validate` and `validator` key in Schema.
- Refer `mongoConnection/index.js`.

## Module 10: Model Relationships by Building APIs

- Let's apply all the concepts by building `/coursium` project.

### 10.1 Initializing the Project
- Setup
```sh
$ npm init --yes
$ npm install express mongoose nodemon
```
### 10.2 Managing Routes
- We need to manage routes better as having all routes in one file is hectic.
- Hence we created `routes` folder with `categories.js` file.
- `express.Router()` is needed to handle routes just like before.
- Now we can use our `routes/categories.js` in `app.js`.

### 10.3 Data Validation
- We can have data validation in the HTTP method requests itself in NodeJs.
- A package called `Joi` enables us to do that.
- The instructor has used a specific version, I am doing the same but you can update yourself.
- ```$ npm install joi@13.1.0```
- Refer `/coursium/routes/categories.js`.

### 10.4 Integrating with the Database
- Let's now use mongoose to connect to the DB as we did previously.
- But this time we will update the DB according to the HTTP requests.

### 10.5 Building the Students API
- Let's create another `routes/students.js` route for our API.
- Student schema will have more data.
- Other thing are pretty much the same.
- One extra thing is different validation function for PUT request.

### 10.6 Organizing the App
- A good coding practice is to follow `Single Responsibility Principle`.
- The idea behind the SRP is that every class, module, or function in a program should have one responsibility/purpose in a program.
- Hence we can't have 'routes' doing validation and designing schemas.
- Create a separate folder `models` to store schemas and validators.