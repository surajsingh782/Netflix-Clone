
const express = require('express');
const signupController = require('../controllers/signupController');
const loginController = require('../controllers/loginController');

const loginRouter = express.Router();

loginRouter.post("/signup",signupController);
loginRouter.post("/login",loginController);




loginRouter.get("/signup1",(req,res)=>{
  
  res.send("backend is working")
})



// export default loginRouter;
module.exports = loginRouter;