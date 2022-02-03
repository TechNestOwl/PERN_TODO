const express = require('express');
const app = express();
const port = 3001
const cors = require('cors');
const { application } = require('express');
const pool = require('./db');


//Middleware
app.use(cors());
app.use(express.json());//req.body
// app.use(express.urlencoded());

// app.get('/', (req,res) => {
//     res.send("hello")
// });


//CREATE

app.post("/todos", async (req,res) => {
    try{

        const {description} = req.body;
        const  newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES ($1)",
            [description]
        );
        res.json(newTodo);
    }catch(err){
        console.error(err.message);
    }
})

//GET ALL TODO



//UPDATE TODO



//DELETE TOTO



app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})