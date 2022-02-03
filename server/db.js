const Pool = require('pg').Pool;

const pool = new Pool({

    user: "GilGuimaraes",
    password:"password",
    host:"localhost",
    port:5432,
    database: 'todo_db'
});

module.exports = pool;
