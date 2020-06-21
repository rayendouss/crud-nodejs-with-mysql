var con = require('../DBconnection');
var connection = con.getConnection();
connection.connect();
var express = require('express');
var router = express.Router();

router.post('/',(req,res)=>{

    var dateP = Date.now();

    connection.query("insert into commentaire(id,nomUser,contenu,idPost,dateCom) values (?,?,?,?,?)",
        [null,req.body.nomU,req.body.contenuP,req.body.idP,Date.now().toString()],(err,result)=>{
            if(err){
                res.send(err);
            }else{
                res.send({"result":"success"});
            }
        });
})
module.exports = router ;
