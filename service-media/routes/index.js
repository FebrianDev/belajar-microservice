const express = require('express');
const router = express.Router();
const db = require('../config/db')
/* GET home page. */
router.get('/', function(req, res, next) {
  db.authenticate().then(()=>{
    console.log('success connect to database')
  })
  //res.render('index', { title: 'Express' });
});

module.exports = router;
