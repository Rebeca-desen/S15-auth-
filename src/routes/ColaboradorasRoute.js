const express = require("express");
const router = express.Router();
const controller = require('../controllers/colaboradorasController')

router.post('/', controller.creat)
router.get('/', controller.getAll)
router.post('/login', controller.login)

module.exports = router;
