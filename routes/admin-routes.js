const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin-controller');

router.use('/admin', adminController.checkIsAdmin);

router.get('/admin', adminController.getAdminPage);

// router.get('/admin/users', adminController.getUsers);

// router.get('/admin/contests', adminController.getContests);

// router.get('/admin/questions', adminController.getQuestions);

// router.get('/admin/submissions', adminController.getSubmissions);

module.exports = router;
