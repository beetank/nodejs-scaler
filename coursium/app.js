const express = require("express");
const categories = require("./routes/categories");
const students = require("./routes/students");
const courses = require("./routes/courses");
const mongoose = require("mongoose")

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/coursium")
.then(() => {
    console.log("Connection Successful!");
})
.catch((err) => {
    console.log("Couldn't connect!", err);
})

app.use(express.json());
app.use("/api/categories", categories);
app.use("/api/students", students);
app.use("/api/courses", courses);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));