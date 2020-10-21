const mysql = require("mysql");

// Setup the sql connection with my sql parameters 
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "BriggoK2",
  database: "burgers_db"
});
// Throw error if it fails
connection.connect(err => {
  if (err) {
    throw err;
  }
});

//Export the connection 

module.exports = connection;