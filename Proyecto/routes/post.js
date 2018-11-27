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

    var vistas= parseInt(result[0].vistas) + 1;
    var queryUpdate = "UPDATE publicaciones SET vistas="+vistas+" where id="+id+"";
    db.query(queryUpdate, function(error,result){
      if(error){
        console.log(error);
      }
    });

    res.render('post', { publicaciones:result,idU: req.session.idU });
  });
});

module.exports = router;
