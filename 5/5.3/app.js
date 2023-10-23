const express = require("express");

const app = express(); // create an app object

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

const port = process.env.PORT || 5000; // taking care of dynamic port assignment
app.listen(port, () => console.log(`App listening on port ${port}`));