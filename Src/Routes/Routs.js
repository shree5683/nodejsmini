let routes=require("express");
let regCon=require("../Controllers/RegCon.js")

let router=routes.Router();

router.post("/register",regCon.regCon);

router.get("/",regCon.homepage);
router.get("/signup",regCon.SignUpPage);
router.get("/signin",regCon.SignInPage);
router.post("/validate",regCon.validate);
module.exports=router; 