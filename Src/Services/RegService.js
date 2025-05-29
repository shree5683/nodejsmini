let models=require("../Model/regmodels.js")

class Regservice{
    ServiceData(name,email,contact,username,password){
        let index=email.indexOf("@gmail.com");
        if (index!=-1) {
            models.saveuser(name,email,contact,username,password)
            return "registration is done ";
        } else {
            return "registration is fail ";
        }
    }
}


module.exports=new Regservice();