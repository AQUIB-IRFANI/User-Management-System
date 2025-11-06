const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

router.get('/', (req, resp) => resp.render('auth/register'));
router.post('/', authController.register);

router.get('/login', (req, res) => res.render('auth/login'));
router.post('/login', authController.login);


router.get('/logout', authController.logout);
module.exports = router;