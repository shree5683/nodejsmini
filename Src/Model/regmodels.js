let conn=require("../config/db.js");

exports.saveuser=(...regData)=>{
    conn.query("insert into noderegister values('0',?,?,?,?,?)",
    [...regData]);
    return true;
};

exports.ValidateUser=(...UserInfo)=>{
    let promise=new Promise((resolve,reject)=>{
         conn.query("select * from noderegister where username=? and password=?",
    [...UserInfo],(err,result)=>{

        if (err) {
            reject(err);
        } else {
            console.log(result);
            resolve(result);
        }
       
        });
    })
   
    return promise;
}