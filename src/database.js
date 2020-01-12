const mysql = require('mysql');

const pool = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Jilz2018*",
    database: "dbclientes"
  });

  module.exports = pool;