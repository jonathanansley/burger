// Import MySQL connection.
var connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, cb) {
    connection.query("SELECT * FROM " + tableInput + ";", function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }, // end of all function

  // An example of objColVals would be {name: panther, sleepy: true}
  update: function(tableInput, condition, cb) {
    connection.query("UPDATE " + tableInput + "SET devoured=true WHERE id="+condition+";", function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }, // end of update function

  create: function(tableInput, val, cb) {
    connection.query("INSERT INTO " + tableInput + " (burger_name) VALUES ('"+val+"'');", function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  } // end of create function

}; // end of orm

// Export the orm object for the model (burger.js).
module.exports = orm;


// // Helper function for SQL syntax.
// function printQuestionMarks(num) {
//   var arr = [];

//   for (var i = 0; i < num; i++) {
//     arr.push("?");
//   }

//   return arr.toString();
// }

// // Helper function for SQL syntax.
// function objToSql(ob) {
//   var arr = [];

//   for (var key in ob) {
//     if (Object.hasOwnProperty.call(ob, key)) {
//       arr.push(key + "=" + ob[key]);
//     }
//   }

//   return arr.toString();
// }




// // Object for all our SQL statement functions.
// var orm = {
//   all: function(tableInput, cb) {
//     var queryString = "SELECT * FROM " + tableInput + ";";
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   },
//   create: function(table, cols, vals, cb) {
//     var queryString = "INSERT INTO " + table;

//     queryString += " (";
//     queryString += cols.toString();
//     queryString += ") ";
//     queryString += "VALUES (";
//     queryString += printQuestionMarks(vals.length);
//     queryString += ") ";

//     console.log(queryString);

//     connection.query(queryString, vals, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   },
//   // An example of objColVals would be {name: panther, sleepy: true}
//   update: function(table, objColVals, condition, cb) {
//     var queryString = "UPDATE " + table;

//     queryString += " SET ";
//     queryString += objToSql(objColVals);
//     queryString += " WHERE ";
//     queryString += condition;

//     console.log(queryString);
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }

//       cb(result);
//     });
//   },
//   delete: function(table, condition, cb) {
//     var queryString = "DELETE FROM " + table;
//     queryString += " WHERE ";
//     queryString += condition;

//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }

//       cb(result);
//     });
//   }
// };

