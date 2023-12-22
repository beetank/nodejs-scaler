const express = require("express");
const {Category, validateData} = require("../models/categoriesModel");
const ObjectId = require('mongoose').Types.ObjectId;
const router = express.Router();


router.get("/", async (req, res) => {
    let categories = await Category.find();
    res.send(categories);
});

router.get("/:id", async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.send("Invalid MongoID!");
    let category = await Category.findById(req.params.id);
    if (!category) {
        return res.send("Invalid Category ID!");
    }
    res.send(category);
});

router.post("/", async (req, res) => {
    const {error} = validateData(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const category = new Category({
        name: req.body.name
    });

    await category.save();

    res.send(category);
});

router.put("/:id", async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.send("Invalid MongoID!");
    const {error} = validateData(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const category = await Category.findByIdAndUpdate(req.params.id, {name: req.body.name}, {new: true});
    if (!category) {
        return res.status(404).send("Invalid Category ID!");
    }

    res.send(category);
});

router.delete("/:id", async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.send("Invalid MongoID!");
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
        return res.status(404).send("Invalid Category ID!");
    }
    res.send(category);
});

module.exports = router;