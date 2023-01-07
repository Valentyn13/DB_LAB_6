const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  database: "mydb",
  user: "root",
  password: "jperveyev###2022",
});

module.exports = db;