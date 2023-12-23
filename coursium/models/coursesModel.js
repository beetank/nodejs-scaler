const Joi = require("joi");
const mongoose = require("mongoose");
const {categorySchema} = require("../models/categoriesModel");

const courseSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength: 5, maxlength: 255},
    category: {
        type: categorySchema,
        required: true
    },
    creator: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true
    }
});

const Course = new mongoose.model("Course", courseSchema);

function validatePostData(course) {
    const schema = {
        title: Joi.string().min(5).max(255).required(),
        creator: Joi.string().min(3).max(60).required(),
        categoryId: Joi.string().required(),
        rating: Joi.number().min(1).max(5).required(),
    };

    return Joi.validate(course, schema);
}

function validatePutData(course) {
    const schema = {
        title: Joi.string().min(5).max(255),
        categoryId: Joi.string(),
        creator: Joi.string().min(3).max(60),
        rating: Joi.number().min(1).max(5)
    };

    return Joi.validate(course, schema);
}

exports.Course = Course;
exports.validatePost = validatePostData;
exports.validatePut = validatePutData;