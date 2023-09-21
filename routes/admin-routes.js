const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin-controller');
const questionController = require('../controllers/question-controller');

router.use('/admin', adminController.checkIsAdmin);

router.get('/admin', adminController.getAdminPage);

// router.get('/admin/users', adminController.getUsers);

// router.get('/admin/contests', adminController.getContests);

router.get('/admin/questions', questionController.getQuestions);
router.get('/admin/add-question', questionController.getAddQuestion);
router.post('/admin/add-question', questionController.postAddQuestion);
router.get('/admin/edit-question/:questionId', questionController.getEditQuestion);
router.post('/admin/edit-question', questionController.postEditQuestion);

// router.get('/admin/submissions', adminController.getSubmissions);

module.exports = router;
