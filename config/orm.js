let connection = require('./connection');

function objToSql(obj) {
    let arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (let key in obj) {
      let value = obj[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(obj, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = `'${value}'`;
        }
        arr.push(`${key}=${value}`);
      }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

const orm = {
    selectAll: (table) => {
        const queryString = "SELECT * FROM ??";
        console.log(queryString);
        const query = connection.query(queryString, [table], (err, result) => {
            if (err) {
                throw err;
            }
            // console.log(`Compiled SQL: ${query.sql}`);
            console.log(result);
        });
    },

    insertOne: (table) => {
        const queryString = `INSERT INTO ${table} (burger_name, devoured) VALUES(?,?)`;
        console.log(queryString);
        const query = connection.query(queryString, [table], (err, result) => {
            if (err) {
                throw err;
            }
            // console.log(`Compiled SQL: ${query.sql}`);
            console.log(result);
        });

    },

    updateOne: (table, objColVals, condition, cb) => {
        let queryString = `UPDATE ${table}`;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, (err, result) => {
          if (err) {
            throw err;
          }
    
          console.log(result);
        });

    },


}

module.exports = orm;