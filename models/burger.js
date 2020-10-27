let orm = require("../config/orm")

const burgers = {
    selectAll:function(cb) {
      orm.selectAll("burgers", (results) => {
        cb(results);
        
      });
    },
    insertOne: function(name, cb){
      orm.insertOne("burgers", name,cb)

    },
 
    updateOne: function(condition, cb) {
      orm.updateOne("burgers", condition, (result) => {
        cb(result);
      });
    },
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burgers;


  

  