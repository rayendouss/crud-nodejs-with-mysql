var con = require('../DBconnection');
var connection = con.getConnection();
connection.connect();
var express = require('express');
var router = express.Router();

router.put('/:id',(req,res)=>{
    var id = req.body.id;
    var nom = req.body.nom ;
    var contenu = req.body.contenu ;
    var dateP = Date.now().toString();

    connection.query("update commentaire set nomUser= ? , contenu = ?  where id = ?",
        [req.body.nom,req.body.contenu, req.params.id],(err,result)=>{
            if(err){
                res.send(err);
            }else{
                res.send({"result":"success"});
            }
        });
})
module.exports = router ;
