// const connection = require('./mysql.js');


// class Delete{

//     static delete(uuid){

//         return new Promise((resolve, reject) => {
//             console.log(uuid)
//             connection.query(`delete from recipes WHERE uuid = '${uuid}';`).spread(function (recipe) {
                
//                 resolve('Deleted')

//                 }).catch((error) =>{
//                     reject('Delete failed ', error)
//                 });

//         })
        
//     }

    

// }

// module.exports = Delete;