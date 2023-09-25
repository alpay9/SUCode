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

exports.getProblem = (req, res) => {
    questionId = req.params.problemId;
    Question.findById(questionId)
        .then((question) => {
            if(question.isPublic == false && !req.session.isAdmin){
                return res.render("general/error", {pageTitle: "You have no access"});
            }
            res.render("general/question", { question: question });
        })
        .catch((err) => {
            res.render("general/error", { pageTitle: "object not found" });
        });
};
