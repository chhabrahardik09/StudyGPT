const mysql = require('mysql2');
require('dotenv').config();

const globalPool = mysql.Pool;
console.log(globalPool);

if(globalPool !== 'undefined'){
    module.exports = globalPool;
}
const pool = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT,
});

module.exports = pool.promise();
