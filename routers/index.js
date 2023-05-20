const router=require('express').Router();

const userController=require("../controllers/user");

//register a new user
router.post('/register',userController.register);

//login
router.post('/login',userController.login);

module.exports=router;