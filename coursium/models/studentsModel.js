const mongoose = require("mongoose");
const Joi = require("joi");

const studentSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3, maxlength: 60},
    isEnrolled: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 12
    }
});

const Student = new mongoose.model("Student", studentSchema);

function validatePostData(student) {
    const schema = {
        name: Joi.string().min(3).max(60).required(),
        isEnrolled: Joi.boolean(),
        phone: Joi.string().min(10).max(12).required()
    };

    return Joi.validate(student, schema);
}

function validatePutData(student) {
    const schema = {
        name: Joi.string().min(3).max(60),
        isEnrolled: Joi.boolean(),
        phone: Joi.string().min(10).max(12)
    };

    return Joi.validate(student, schema);
}

exports.Student = Student;
exports.validatePost = validatePostData;
exports.validatePut = validatePutData;