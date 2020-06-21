var con = require('../DBconnection');
var connection = con.getConnection();
connection.connect();
var express = require('express');
var router = express.Router();

router.delete('/:id',(req,res)=>{

    connection.query("delete from posts where id = ?", [req.params.id],(err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send({"result":"success"});
        }
    });
})
module.exports= router;
