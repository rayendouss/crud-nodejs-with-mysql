var con = require('../DBconnection');
var connection = con.getConnection();
connection.connect();
var express = require('express');
var router = express.Router();

router.post('/',(req,res)=>{
    var id = req.body.id;
    var nom = req.body.nom ;
    var contenu = req.body.contenu ;
    var dateP = Date.now().toString();

    connection.query("insert into posts(id,NomPost,Contenu,DatePost) values (?,?,?,?)",
        [null,req.body.nom,req.body.contenu,dateP],(err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send({"result":"success"});
        }
    });
})
module.exports = router ;
