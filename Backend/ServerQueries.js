const {Client} = require("pg")
require("dotenv").config()
const client = new Client({
    user :process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    database:process.env.DB_DATABASE
})

async function connect(){
    try{
        await client.connect();
        console.log('Connected');
    } catch(e){
        console.log(`connection failed${e}`);
    }


}

const getexercises=async(req,res)=>{
    try{
        const results = await client.query("SELECT*FROM Exercises");
        res.json(results.rows);
    }
    catch(e){
        console.log("ERROR 404")
        res.send("ERROR 404")
    }
    res.json([])
}


        


module.exports={
    getexercises,
    connect
}