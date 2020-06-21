var express = require('express') ;
var bodyParser = require('body-parser');
var cors = require('cors') ;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
var fetch = require('./crud/fetch');
app.use('/allP',fetch)

var insert = require('./crud/ajoutPost');
app.use('/addP',insert)

var updateP = require('./crud/updatePost');
app.use('/updateP',updateP)

var deleteP = require('./crud/deletePost');
app.use('/deleteP',deleteP)

var affComsParPost = require('./Commentaire/AffichPost');
app.use('/affComs',affComsParPost)

var ajoutCom = require('./Commentaire/AjoutCom');
app.use('/addC',ajoutCom)

var updateC = require('./Commentaire/UpdateCom');
app.use('/updateC',updateC)

var deleteC = require('./Commentaire/DeleteCom');
app.use('/deleteC',deleteC)


app.listen(8080);
console.log('server on');
