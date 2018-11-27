var express = require('express');
var router = express.Router();
var db = require('./db');

/* GET home page. */
router.get('/', function(req, res, next) {
  var queryPublicaciones = "select * from publicaciones order by id desc";
  db.query(queryPublicaciones, function(error,result){
    if(error){
      console.log(error);
    }
    res.render('index', { publicaciones:result , idU: req.session.idU});
  });
});

module.exports = router;
