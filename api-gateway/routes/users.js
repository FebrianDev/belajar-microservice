const express = require('express');
const router = express.Router();
const {APP_NAME} = process.env;
const {register,login, update,getUserById, logout} = require('./handler/users/index')

const verifyToken = require('../midllewares/verifyToken')

router.post('/register', register)
router.post('/login', login)
router.put('/update', verifyToken, update)
router.get('/',verifyToken, getUserById)
router.post('/logout', verifyToken, logout)
module.exports = router;
