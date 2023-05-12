const  express =require ("express");
const  mysql =require ("mysql");

const app = express();

app.use(express.json());
const db =mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
        database:"crud",

    }
)
app.post('/login' , (req, res) =>{
    const sql ="SELECT * FROM login WHERE username = ? AND password  = ? " ;
    //const  values = [
       // req.body.email,
        //req.body.password,
   // ]
    db.query(sql , [ req.body.username, req.body.password, ], (err , data) => {
        if(err) return res.json('Error');
        if(data.length > 0) {
            return res.json('Login successfully');
        }
        else{
            return res.json('no record');
        }
       
    }
    )
} 
 )
app.listen(8081, () => {
    console.log("Listening...");

})
