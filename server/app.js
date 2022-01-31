const express = require('express');
const app = express();
const port = 3001
const cors = require('cors');
const { application } = require('express');



//Middleware
app.use(cors());
app.use(express.json());

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})