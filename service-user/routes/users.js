const express = require('express')
const router = express.Router()
const {register,login,update, getUserById,getUsers,logout} = require('./handler/users/index')

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.put('/update/:id', update)
router.get('/:id', getUserById)
router.get('/',getUsers)

module.exports = router
