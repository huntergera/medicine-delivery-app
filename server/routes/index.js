const { Router } = require('express');
const router = new Router();
const shopsRouter = require('./shopsRouter');

router.use('/', shopsRouter);

module.exports = router;
