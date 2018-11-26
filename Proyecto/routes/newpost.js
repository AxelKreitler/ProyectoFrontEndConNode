var express = require('express');
var router = express.Router();
var db = require('./db');

router.get('/', function(req,res,next){
    res.render('newpost');
});


router.post('/', function(req,res,next){
    var titulo = req.body.titulo;
    var subtitulo = req.body.subtitulo;
    var descripcion = req.body.descripcion;
    var AFile = req.files.Nfile;
    var nombreFile = AFile.name;
    var id = 1;
    console.log(nombreFile);

    if(req.session.email == null){
        res.render('login',{mensaje:'Acceso Denegado, logeate primero.'});
    }

    if(AFile.mimetype == "image/jpeg" || AFile.mimetype == "image/png" || AFile.mimetype == "image/jpg"){
        AFile.mv('./public/images/'+nombreFile,function(error){
            if(error){
                console.log(error);
            }
            
        });
    }

    var consulta = "insert into publicaciones (Titulo,SubTitulo,Descripcion,Imagen,creador_id) values ('"+titulo+"','"+subtitulo+"','"+descripcion+"','/images/"+nombreFile+"','"+id+"')";

    db.query(consulta,function(error, resultado){
        if (error) {
            console.log(error);
        }
        else{
            res.redirect('../');
        }
    });
});

module.exports = router;