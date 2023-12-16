const express = require("express");
const myMiddleware = require("./middlewares/middle");
const morgan = require("morgan");

const app = express(); // create an app object

app.use(express.json())
app.use(morgan())
app.use(myMiddleware);

app.use((req, res, next) => {
    console.log("I am the second middleware.");
    next();
})

const courses = [
    {id: 1, name: 'Javascript'},
    {id: 2, name: 'Python'},
    {id: 3, name: 'C++'}
];

// get request handling
app.get('/', (req, res) => {
    res.send("This is for practice of backend development with Node+Expess.");
});

app.get('/about', (req, res) => {
    res.send("Developed by etank0.")
});

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

app.put('/courses/:id', (req, res) => {
    let course = courses.find(course => course.id === parseInt(req.params.id));

    if (!course)
    {
        res.status(404).send("Course not found!");
    }
    else
    {
        course.name = req.body.name;
        res.send(course);
    }
})

app.get('/courses', (req, res) => {
    res.send(courses);
}) 

app.post('/courses', (req, res) => {
    let course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);
})

app.delete('/courses/:id', (req, res) => {
    let course = courses.find(course => course.id === parseInt(req.params.id));
    let index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
})

const port = process.env.PORT || 5000; // taking care of dynamic port assignment
app.listen(port, () => console.log(`App listening on port ${port}`));