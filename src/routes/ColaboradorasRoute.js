const express = require("express");
const router = express.Router();
const controller = require('../controllers/colaboradorasController')

router.post('/', controller.creat)
router.get('/', controller.getAll)

module.exports = router;
