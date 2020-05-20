const connection = require('./mysql.js');

const uuidv4 = require('uuid').v4



class Users{

    static login(username, password){

        return new Promise((resolve, reject) => {

            connection.query(`Select * From users WHERE username = '${username}';`).spread(function (user) {
                console.log("Here in db")
                console.log(user[0].password)
                console.log('Body of db')
    
                if(user[0].password == password){
                    console.log("Login sucessful");
                   resolve('Login Successful')
                }else{
                    console.log("Login failed");
                 
                    reject('Login Fail')
                  }
                
                }).catch((error) =>{
                    reject('Error in login: ', error)
                });

        })
        
    }

    static create(email_address, password,username){


        console.log(`this is the stuff: ${email_address}, ${password}, ${username}`)
        return new Promise((resolve, reject) => {
            
            


                connection.query('INSERT INTO cookit_db.users(email_address, uuid, password, username, is_admin) VALUES(?,?,?,?,?)', [email_address, uuidv4(), password, username, false])
                .then((data) => {
                    // success;
                    //console.log('new game state added to db: ', gamestate)
                    resolve(data);
                })
                .catch(error => {
                    // error;
                   console.error('error in creating user');
    
                    reject('Error in user create')
                });

           
        });

    }

    static read(){
        return new Promise((resolve, reject) =>{

            connection.query('SELECT * FROM cookit_db.users')
            .then(() =>{
                resolve(data);
            })
            .catch(error =>{
                console.log(error);
                reject(error);
            });

        });
    }



    static updateUsername(username, newUsername){
        return new Promise((resolve, reject) =>{

            connection.none('UPDATE cookit_db.users SET username = ? WHERE username = ?',[newUsername, username])
            .then(() => {
                // success;
                resolve(data);
            })
            .catch(error => {
                // error;
                console.error(error);
                reject(error);
            });
        });
    }

    static updateEmail(email, newEmail){
        return new Promise((resolve, reject) =>{

            connection.none('UPDATE cookit_db.users SET email = ? WHERE email = ?',[newEmail, email])
            .then(() => {
                // success;
                resolve(data);
            })
            .catch(error => {
                // error;
                console.error(error);
                reject(error);
            });
        });
    }

   

    static updateAdmin(admin, newadmin){
        return new Promise((resolve, reject) =>{

            connection.none('UPDATE cookit_db.users SET admin = ? WHERE admin = ?',[newadmin, admin])
            .then(() => {
                // success;
                resolve(data);
            })
            .catch(error => {
                // error;
                console.error(error);
                reject(error);
            });
        });
    }

   

    static getUsername(username){
        return new Promise((resolve, reject) => {
            connection.one('SELECT * FROM cookit_db.users WHERE username = ?', [username])
            .then((data) => {
                // success;
                //console.log(data)
                resolve(data);
            })
            .catch(error => {
                // error;
                console.error(error);
                reject(error)
            });
        });        
    }
    static getEmail(email){
        return new Promise((resolve, reject) => {
            connection.one('SELECT * FROM cookit_db.users WHERE email = ?', [email])
            .then((data) => {
                // success;
                //console.log(data)
                resolve(data);
            })
            .catch(error => {
                // error;
                console.error(error);
                reject(error)
            });
        });        
    }

    static getPassword(password){
        return new Promise((resolve, reject) => {
            connection.one('SELECT * FROM cookit_db.users WHERE password = ?', [password])
            .then((data) => {
                // success;
                //console.log(data)
                resolve(data);
            })
            .catch(error => {
                // error;
                console.error(error);
                reject(error)
            });
        });        
    }

    static getAdmin(admin){
        return new Promise((resolve, reject) => {
            connection.one('SELECT * FROM cookit_db.users WHERE admin = ?', [admin])
            .then((data) => {
                // success;
                //console.log(data)
                resolve(data);
            })
            .catch(error => {
                // error;
                console.error(error);
                reject(error)
            });
        });        
    }

    

}

module.exports = Users;