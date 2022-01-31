const Pool = require('pg').Pool;

const pool = new Pool({

    user: "gtndxnht",
    password:"a_d8lO1GIPFr4sqx8QR2hSe_-W2RTZMd",
    host:"lcoalhost",
    port:5432,
    database: 'todo_db'
});

module.exports = pool;

