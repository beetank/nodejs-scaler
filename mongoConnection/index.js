const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testDB")
.then(() => {
    console.log("Connection Successful!");
})
.catch((err) => {
    console.log("Couldn't connect!", err);
})

// Schemas in Mongoose
const courseSchema = new mongoose.Schema({
    name: String,
    creator: String,
    publishedDate: {type: Date, default: Date.now},
    isPublished: Boolean,
    rating: Number
})

const Course = mongoose.model("Course", courseSchema);


// CREATE
async function addCourse() {

    const course = new Course({
        name: "Python Tutorial",
        creator: "Jaggu Bandar",
        isPublished: true,
        rating: 3.8
    });

    const result = await course.save();
    console.log(result);
}

// addCourse();

// READ
// Comparison Operators: $eq, $ne, $gte, $gt, $lte, $lt, $in, $nin (not-in)
// e.g .find({"rating": {$nin: [4.3, 3.8]}})
async function getCourses(rating) {
    const courses = await Course.find().select({name: 1}).or([{creator: "Dholu"}, {rating: 3.8}]);
    // NOTE: select() is not a MongoDB related function. 
    console.log(courses);
}

getCourses(4);

// UPDATE
async function updateCourse(id) {
    let course = await Course.findById(id);
    if (!course) {
        console.log("No such document!");
        return;
    }
    course.creator = "Kalia";
    course.name = "JavaScript";
    const upCourse = await course.save();
    console.log(upCourse);
}

// updateCourse("65809701a81552d4922761e7");

// DELETE
async function deleteCourse(id) {
    let course = await Course.findByIdAndDelete(id);
    // findByIdAndRemove() no longer exists after mongoose 8.x.x
    if (!course) {
        console.log("No such course was found! Nothing Deleted!");
        return;
    }
    console.log(course);
}

// deleteCourse("6580b5fded0ad00c96249b08");