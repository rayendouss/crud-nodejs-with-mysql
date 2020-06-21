var con = require('../DBconnection');
var connection = con.getConnection();
connection.connect();
var express = require('express');

var router = express.Router();

router.get('/:id',(req,res)=>{
    connection.query('select * from commentaire where idPost = ?',[req.params.id], (err,array,feilds)=>{
        res.send(array);
    })
})
module.exports= router;
