const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    difficulty: { type: Number, required: true },
    solution: { type: String },
    isPublic: { type: Boolean, required: true },
    limits: [{ type: Object }],
    testCases: [{ type: Object }],
});

module.exports = mongoose.model("Question", questionSchema);
