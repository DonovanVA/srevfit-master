const express = require("express")
const {Client} = require("pg")
const app = express()
const db = require('./ServerQueries')
require("dotenv").config()
const client = new Client({
    user :process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    database:process.env.DB_DATABASE
})

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
app.use(express.urlencoded({extended:false}));

db.connect();

//Queries
app.get("/exercises",db.getexercises)
//Queries
app.listen(5001,()=>console.log("listening on port 5001"))