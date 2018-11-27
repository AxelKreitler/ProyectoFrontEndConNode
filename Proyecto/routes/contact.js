var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Express', idU: req.session.idU });
});

module.exports = router;
