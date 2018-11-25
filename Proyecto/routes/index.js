var express = require('express');
var router = express.Router();
var db = require('./db')

/* GET home page. */
router.get('/', function(req, res, next) {
  var queryPublicaciones = "select * from publicaciones"
  db.query(queryPublicaciones, function(error,result){
    if(error){
      console.log(error);
    }
    res.render('index', { publicaciones:result });
  });
});

module.exports = router;
