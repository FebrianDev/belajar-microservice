const express = require('express');
const router = express.Router();
const {create,getAll,destroy} = require('./handler/media/index')
const {APP_NAME} = process.env;


const verifyToken = require('../midllewares/verifyToken')

router.post('/', create)
router.get('/',verifyToken,getAll)
router.delete('/:id',destroy)

module.exports = router;
