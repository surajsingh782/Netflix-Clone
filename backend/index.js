
const express = require('express');
const cors = require('cors')
const netflixRoute = require('./webRoute/netflixRoute.js');
const connectDb = require('./db/userLogindb')


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
connectDb();
const port = process.env.PORT || 5500;

app.use("/form",netflixRoute);

app.listen(port, ()=>{
    console.log(`server at http://localhost:${port}`);
})