let orm = require("../config/orm")

const burgers = {
    all(cb) {
      orm.all("burgers", (results) => {
        cb(results);
      });
    },
    update(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, (result) => {
        cb(result);
      });
    },
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burgers;