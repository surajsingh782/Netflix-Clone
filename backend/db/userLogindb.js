
const mongoose = require('mongoose')


const connectDb = async () => {
    try {
       return await  mongoose.connect("mongodb://localhost:27017/netflix-clone",{
        useNewUrlParser: true,
        useUnifiedTopology: true
       }).then(()=>{
    console.log("connected successfully mongodb")
})
       
    } catch (error) {
        console.log(error);
    }
   
}


module.exports = connectDb;