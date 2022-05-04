const express = require("express")
const bodyParser = require('body-parser')
const db=require('./AuthQueries')
const app = express()
require("dotenv").config()

app.use(bodyParser.json())
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","http://localhost:19006");
    res.header("Access-Control-Allow-Credentials",true);
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With,Content-Type,Accept"
    );
    res.header("Access-Control-Allow-Methods","POST,PUT,DELETE,OPTIONS,GET");
    next();
});
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//queries
db.connect();
app.get("/users",db.getusers)
app.post('/store',db.signupuser)
//
app.listen(5002,()=>console.log("listening on port 5002"))