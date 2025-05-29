let express = require ("express");
let app=express();
let bodyparser=require("body-parser");
let router=require("../Src/Routes/Routs");
let conn=require("./config/db.js");

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use("/",router);
app.set('view engine','ejs'); 
app.use(express.static("public"));
module.exports=app;