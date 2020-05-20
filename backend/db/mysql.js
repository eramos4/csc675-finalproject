/**
 * make the mysql connection using mysql-promise
 * 
 * 
 *  try catch for the db connection
 * 
 * if fail, then connect to backup db server instance
 * run the sql code that creates the other database again
 * then try to connect to that db.
 * 
 * export that connection so the rest of the 
 * app can use it.
 */
const mysqldb = require('mysql-promise')();

mysqldb.configure({
	"host": "localhost",
	"user": "root",
	"password": "password",
	"database": "cookit_db"
});

// connection.query('select * from users', []).then(function (data) {
// 	console.log('this works?: ' , data);
//     }).catch((error) =>{
//         console.log(error);f
//     });

 
module.exports = mysqldb;

