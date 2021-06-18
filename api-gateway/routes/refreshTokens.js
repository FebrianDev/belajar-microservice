const express = require('express');
const router = express.Router();
const {APP_NAME} = process.env;
const {refreshToken} = require('./handler/refresh-tokens/index')

router.post('/', refreshToken)

module.exports = router;
