var express = require('express');
var router = express.Router();
var db = require('./db');
var md5 = require('md5');

router.get('/', function(req,res,next){
    res.render('login');
});

router.post('/', function(req,res,next){
    // los req tienen al final en name del form
    var email = req.body.Email1;
    var password = md5(req.body.Password1);
    var consulta = "select * from usuarios where email='"+ email +"' and password='"+password+"'";
    db.query(consulta,function(error, resultado){
        if (error) {
            console.log(error)
        }
        else{
            if(resultado.length > 0){
                console.log("Logeado");
                req.session.email = email;
                console.log(req.session.email);
                //next();
                res.redirect('/panel');
            }
            else{
                res.render('login',{mensaje:'Datos incorrectos'});
            }
        }
    });
});

module.exports = router;