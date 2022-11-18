var express = require('express');
var router = express.Router();
const mailSmS = require('../controller/mail')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/',mailSmS.textm, function(req, res, next) {
    
  });

module.exports = router;
