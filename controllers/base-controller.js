const Question = require("../models/question-model");

exports.getHome = (req, res) => {
    res.render("general/home");
};

exports.getProblems = (req, res) => {
    Question.find()
        .then((questions) => {
            res.render("general/list/questions", {
                questions: questions,
                headers: ["Title", "Description", "Difficulty"],
                attributes: ["title", "description", "difficulty"],
                editable: false,
            });
        })
        .catch((err) => console.log(err));
};
