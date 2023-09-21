const Question = require("../models/question-model");

exports.createQuestion = (title, description, difficulty, isPublic = false) => {
    const question = new Question({
        title: title,
        description: description,
        difficulty: difficulty,
        isPublic: isPublic,
    });
    return question.save();
};

exports.getQuestionById = async (id) => {
    const question = await Question.findById(id);
    return question;
};

exports.getQuestions = (req, res) => {
    Question.find()
        .then((questions) => {
            if (questions.length === 0) {
                return res.render("general/error", {
                    pageTitle: "No Questions Found",
                });
            }
            res.render("general/list/questions", {
                questions: questions,
                pageTitle: "Questions",
                headers: ["Title", "Difficulty", "Is Public"],
                attributes: ["title", "difficulty", "isPublic"],
                editable: true,
            });
        })
        .catch((err) => console.log(err));
};

exports.getAddQuestion = (req, res, next) => {
    res.render("./admin/edit/question", {
        path: "/admin/add-product",
        editing: false,
    });
};

exports.postAddQuestion = (req, res, next) => {
    const question = new Question({
        title: req.body.title,
        description: req.body.description,
        difficulty: req.body.difficulty,
        isPublic: req.body.isPublic ? true : false,
    });
    question.save().then((result) => {
        res.redirect("admin/questions");
    });
};

exports.getEditQuestion = (req, res, next) => {
    const questionId = req.params.questionId;
    Question.findById(questionId)
        .then((question) => {
            if (!question) {
                return res.redirect("admin/questions");
            }
            res.render("admin/edit/question", {
                path: "/admin/edit-question",
                editing: true,
                question: question,
            });
        })
        .catch((err) => {res.render("general/error", {pageTitle: "object not found"});});
};

exports.postEditQuestion = (req, res, next) => {
    const questionId = req.body.questionId;
    const updatedTitle = req.body.title;
    const updatedDescription = req.body.description;
    const updatedDifficulty = req.body.difficulty;
    const updatedIsPublic = req.body.isPublic ? true : false;

    Question.findById(questionId)
        .then((question) => {
            question.title = updatedTitle;
            question.description = updatedDescription;
            question.difficulty = updatedDifficulty;
            question.isPublic = updatedIsPublic;
            return question.save();
        })
        .then((result) => {
            res.redirect("/admin/questions");
        })
        .catch((err) => console.log(err));
};
