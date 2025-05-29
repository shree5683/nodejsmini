
let Regservice=require("../Services/RegService.js")
let model=require("../Model/regmodels.js")
exports.regCon=(req,res)=>{
    let {name,email,contact,username,password}=req.body;
    let result=Regservice.ServiceData(name,email,contact,username,password);
    res.render("register",{msg:result})
      
}

exports.homepage=(req,res)=>{
        res.render("home.ejs"); 
    } 

    exports.SignUpPage=(req,res)=>{
        res.render("register.ejs",{msg:""});
    }

    exports.SignInPage=(req,res)=>{
        res.render("login.ejs",{msg:""});
    }

    exports.validate=(req,res)=>{
       let{username,password}=req.body;
       let result=model.ValidateUser(username,password);
       result.then((r)=>{

        if(r.length>0){
            res.render("dashboard.ejs");
        }

        else{
           res.render("login.ejs",{msg:" Invalid Username or Password Please Check "});
        }

       }).catch((err)=>{
                res.render("error.ejs");
       })
    }

