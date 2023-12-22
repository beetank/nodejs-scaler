const express = require("express");
const {Student, validatePost, validatePut} = require("../models/studentsModel");
const ObjectId = require('mongoose').Types.ObjectId;
const router = express.Router();



router.get("/", async (req, res) => {
    let students = await Student.find();
    res.send(students);
});

router.get("/:id", async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.send("Invalid MongoID!");
    let student = await Student.findById(req.params.id);
    if (!student) {
        return res.send("Invalid Student ID!");
    }
    res.send(student);
});

router.post("/", async (req, res) => {
    const {error} = validatePost(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const student = new Student({
        name: req.body.name,
        isEnrolled: req.body.isEnrolled,
        phone: req.body.phone
    });

    await student.save();

    res.send(student);
});

router.put("/:id", async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.send("Invalid MongoID!");
    const {error} = validatePut(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const student = await Student.findByIdAndUpdate(req.params.id, {
        name: req.body.name, 
        phone: req.body.phone,
        isEnrolled: req.body.isEnrolled
    }, {new: true});
    if (!student) {
        return res.status(404).send("Invalid Student ID!");
    }

    res.send(student);
});

router.delete("/:id", async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.send("Invalid MongoID!");
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
        return res.status(404).send("Invalid Student ID!");
    }
    res.send(student);
});

module.exports = router;