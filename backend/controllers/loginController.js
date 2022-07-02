const userModel = require('../db/models/signupmodel')


const LoginController = (req,res) => {
    

const userlogin = async (email,password)=>{
   try { 
      const result = await userModel.findOne({ email : email}).exec();
      
      
            if (result) {
      
                   if (result.password === password) {
                      res.status(200).send(result);
                   }else{
                           res.status(201).send({value: "email and password are incorrect"});
                        }
      
            }else{
               res.status(202).send({value: "email is not registered"});
            }
      
   } catch (error) {
      res.status(203).send(error);
   }


} 

const useremail = req.body.email;
const userpassword= req.body.password;
userlogin(useremail,userpassword);


};
module.exports = LoginController;