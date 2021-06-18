const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {

    console.log('success connect to database')

  //res.render('index', { title: 'Express' })
})

module.exports = router
