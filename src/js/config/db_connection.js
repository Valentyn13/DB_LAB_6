const mysql = require('mysql');

const db =  mysql.createConnection({
    user: 'Valentyn',
    host: 'localhost',
    password: '123890',
    database: 'mydb',
})

module.exports = db;