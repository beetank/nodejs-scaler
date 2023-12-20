const express = require("express");
const Joi = require("joi");
const router = express.Router();

const categories = [
    {id: 1, name: "Web Dev"},
    {id: 2, name: "Mobile Dev"},
    {id: 3, name: "Graphic Designing"}
]

router.get("/api/categories", (req, res) => {
    res.send(categories);
});

router.get("/api/categories/:id", (req, res) => {
    let category = categories.find(c => c.id === parseInt(req.params.id));
    res.send(category);
});

router.post("/api/categories", (req, res) => {
    const {error} = validateData(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    const category = {
        id: categories.length + 1,
        name: req.body.name
    };
    console.log(category);
    categories.push(category);
    res.send(category);
});

router.put("/api/categories/:id", (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.id));
    if (!category) {
        return res.status(404).send("Invalid Category ID!");
    }

    category.name = req.body.name;
    res.send(category);
});

router.delete("/api/categories/:id", (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.id));
    if (!category) {
        return res.status(404).send("Invalid Category ID!");
    }

    const index = categories.indexOf(category);
    categories.splice(index, 1);
    res.send(category);
});

function validateData(category) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(category, schema);
}

module.exports = router;