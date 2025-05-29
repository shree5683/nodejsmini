let mysql=require("mysql2")

let conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"Miniprojecct"
});

conn.connect((errr)=>{
    if(errr){
        console.log("Database Connection Problem"+errr);
    }

    else{
        console.log(" Database connection established successfully. ");
    }
});

module.exports=conn;