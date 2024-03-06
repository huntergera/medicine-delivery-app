const { Router } = require('express');
const router = new Router();
const shopsController = require('../controllers/shopsController')

router.post('/', shopsController.create);  // not need

router.get('/', shopsController.getAll);

module.exports = router;
