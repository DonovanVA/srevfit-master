const {Client, Pool} = require("pg")
require("dotenv").config()
const client = new Client({
    user :process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    database:process.env.DB_AUTHDATABASE
})

async function connect(){
    try{
        await client.connect();
        console.log('Connected');
    } catch(e){
        console.log(`connection failed${e}`);
    }


}

const getusers=async(req,res)=>{
    try{
        const results = await client.query("SELECT*FROM credentials");
        res.json(results.rows);
    }
    catch(e){
        console.log("ERROR 404")
        res.send("ERROR 404")
    }

    res.json([])
}

const loginuser=async(req,res)=>{
    console.log(req.body)
    const{email,pw}=req.body

try{
    const potentialLogin = await pool.query(
        "SELECT id, username, passhash FROM users u WHERE u.username=$1",
        [req.body.username]
      );
  
      if (potentialLogin.rowCount > 0) {
        
        if (pw===potentialLogin.rows[0].pw) {
          res.json({ loggedIn: true });
        } else {
          res.json({ loggedIn: false, status: "Wrong username or password!" });
          console.log("not good");
        }
      } 
      else {
        console.log("not good");
        res.json({ loggedIn: false, status: "Wrong username or password!" });
      }

}
catch(e){
    console.log("error")
}

}


const signupuser=async(req,res)=>{
    console.log(req.body)
        const { userid, email,pw } = req.body
    try{
    const existinguser = await client.query(
        "SELECT email from credentials WHERE email=$1",[email]
    )

    if(existinguser.rowCount===0){
        const newentry = await client.query("INSERT INTO credentials (userid,email,pw) VALUES($1,$2,$3)",[
            userid,
            email,
            pw
        ])
        res.json({loggedIn:true,username:userid})
    }

    else{
        res.json({logggedIn:false,status:"Usermame taken"
        })
    }
    }catch(e){
        console.log("error")
    }
       
    
}
        


module.exports={
    getusers,
    signupuser,
    connect,
    loginuser
}