const userModel = require('../db/models/signupmodel')


const signupControllerrr = (req,res)=>{



 const createdoc = async (data)=>{
    try {

     const  user = await userModel.findOne({ email : data.email}).exec();


     if(user){

        res.status(201).send({value:"emails are already registered"})

     }else{

        const userData = new userModel({
            name: data.name,
            email: data.email,
            password: data.password
        })
        const result =  await userData.save();
        res.status(200).send(result)
     }
     } catch (error) {
        res.status(202).send(error)
    }

 }
 
 const userData = req.body;

 createdoc(userData);

}


module.exports = signupControllerrr;