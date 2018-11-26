var express = require('express');
var router = express.Router();
var db = require('./db')

/* GET home page. */
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  var queryPublicaciones = "select * from publicaciones where id="+id+"";
  console.log(queryPublicaciones);
  db.query(queryPublicaciones, function(error,result){
    if(error){
      console.log(error);
    }
    res.render('post', { publicaciones:result });
  });
});

module.exports = router;
