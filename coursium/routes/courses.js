const express = require("express");
const {Course, validatePost, validatePut} = require("../models/coursesModel");
const {Category} = require("../models/categoriesModel");
const ObjectId = require('mongoose').Types.ObjectId;
const router = express.Router();

router.get("/", async (req, res) => {
    let courses = await Course.find();
    res.send(courses);
});

router.get("/:id", async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.send("Invalid MongoID!");
    let course = await Course.findById(req.params.id);
    if (!course) {
        return res.send("Invalid Course ID!");
    }
    res.send(course);
});

router.post("/", async (req, res) => {
    const {error} = validatePost(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    if (!ObjectId.isValid(req.body.categoryId)) return res.send("Invalid Category MongoID!");
    const category = await Category.findById(req.body.categoryId);
    console.log(category);
    if (!category) {
        return res.send("Invalid Category Id!");
    }

    const course = new Course({
        title: req.body.title,
        category: {
            _id: category._id,
            name: category.name
        },
        creator: req.body.creator,
        rating: req.body.rating
    });

    await course.save();

    res.send(course);
});

router.put("/:id", async (req, res) => {

    // for now you have to provide category id to change details
    if (!ObjectId.isValid(req.body.categoryId)) return res.send("Invalid Category MongoID!");
    const category = await Category.findById(req.body.categoryId);
    if (!category) {
        return res.send("Invalid Category Id!");
    }

    if (!ObjectId.isValid(req.params.id)) return res.send("Invalid Course MongoID!");
    const {error} = validatePut(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    console.log(category);

    const course = await Course.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        category: {
            _id: category._id,
            name: category.name
        },
        creator: req.body.creator,
        rating: req.body.rating
    }, {new: true});
    if (!course) {
        return res.status(404).send("Invalid Course ID!");
    }

    res.send(course);
});

router.delete("/:id", async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.send("Invalid MongoID!");
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) {
        return res.status(404).send("Invalid Course ID!");
    }
    res.send(course);
});

module.exports = router;