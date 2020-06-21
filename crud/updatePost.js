var con = require('../DBconnection');
var connection = con.getConnection();
connection.connect();
var express = require('express');
var router = express.Router();

router.put('/',(req,res)=>{
    var id = req.body.id;
    var nom = req.body.nom ;
    var contenu = req.body.contenu ;
    var dateP = Date.now().toString();

    connection.query("update posts set NomPost= ? , Contenu = ? where id = ?",
        [req.body.nom,req.body.contenu, req.body.id],(err,result)=>{
            if(err){
                res.send(err);
            }else{
                res.send({"result":"success"});
            }
        });
})
module.exports = router ;
