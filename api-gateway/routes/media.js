const express = require('express');
const router = express.Router();
const {create,getAll,destroy} = require('./handler/media/index')
const {APP_NAME} = process.env;


router.post('/', create)
router.get('/',getAll)
router.delete('/:id',destroy)

module.exports = router;
