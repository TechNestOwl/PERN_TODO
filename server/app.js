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


//CREATE

app.post("/todos", async (req,res) => {
    try{

        const {description} = req.body;
        const  newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES ($1) RETURNING *",
            [description]
        );
        res.json(newTodo.rows[0]);
    }catch(err){
        console.error(err.message);
    }
});

//GET ALL TODO
app.get('/todos', async (req,res) => {
    try{
        const allTodos = await pool.query('SELECT * FROM todo')
        res.json(allTodos.rows)
    }catch(err){
        console.error(err.message)
    }
});

//specific todo

app.get("/todos/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id] )

        res.json(todo.rows[0]);
    }catch(err){
        console.error(err.message)
    }
});

//UPDATE TODO

app.put("/todos/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const {description} = req.body;
        const updateTodo = await pool.query(
            "UPDATE todo SET description =$1 WHERE todo_id = $2",
            [description, id]
            )
            res.json("Todo updated");
    }catch(err){
        console.error(err.message)
    }
});

//DELETE TOTO

app.delete("/todos/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1",[id]);

        res.json("Todo deleted");
    } catch (err) {
        console.error(err.message)
    }
});


app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})