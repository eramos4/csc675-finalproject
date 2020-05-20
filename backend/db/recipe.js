/**
 * import the mysql connection from mysql.js
 * 
 * use the connection to query the db
 * 
 * 
 */
const uuidv4 = require('uuid').v4

const connection = require('./mysql.js');

class Recipe {

    static search(search_key) {
        console.log('in recipe class > search key: ', search_key)

        //**use the db connection to query the db */

        return new Promise ((resolve, reject) => {
            //query the recipes table  with the search key,

            // the with the uuid from the recipe query if it exists, query the steps to get the steps

            // concatonate the two query data together and 
            //resolve the data
            // select * from recipes where title like '%nachos%'

            connection.query(`Select * From recipes WHERE title like '%${search_key}%';`).spread(function (recipe) {
                
                console.log('this is the recipe:', recipe[0].uuid)

                connection.query(`Select * From steps WHERE recipe_uuid = '${recipe[0].uuid}';`).spread(function (steps) {
                
                    console.log('this is the steps:', steps)

                        connection.query(`Select * From ingredients WHERE recipe_uuid = '${recipe[0].uuid}';`).spread(function (ingrdients) {
                    
                            console.log('this is the ingredients:', ingrdients)
                            
                            resolve(recipe.concat(steps).concat(ingrdients))
                            
                            }).catch((error) =>{
                                console.log('error in ingrdients query')
                                reject('No ingredients found for ' + search_key)
                            });
        
                    }).catch((error) =>{
                        console.log('error in steps query')
                        reject('No steps found for ' + search_key)
                    });

              
                
                }).catch((error) =>{
                    reject('No recipe found for ' + search_key)
                });
        

         
        })
    }




    static insert(rec) {
        console.log('in recipe class > insert: ', rec)

        //**use the db connection to query the db */

//         { Steps: [ 'asdf', 'sdf' ],
//   Title: 'asdf',
//   Description: 'asdf',
//   Ingredients: 'asdf',
//   'Food Category': 'asdf',
//   Difficulty: 'adf' }

        return new Promise ((resolve, reject) => {
            let recipe_uuid = uuidv4()
            //insert into recipe table
            connection.query(`Insert into recipes (uuid, title, author_username, description, food_category, author_diffculty) values(?,?,?,?,?,?)`,
            
            [recipe_uuid,rec.Title, 'shane' ,rec.Description, rec['Food Category'], rec.Difficulty ]).spread(function (data) {
                

                //now insert into steps, 

                let queries = []

                for(let i = 0; i < rec.Steps.length; ++i)
                {
                   queries.push( connection.query(`Insert into steps (recipe_uuid, step_index, content, image) values(?,?,?,?)`, [recipe_uuid, (i + 1), rec.Steps[i], 'none']) )
                }

                queries.push( connection.query(`Insert into ingredients (recipe_uuid, ingredients_index, ingredient_name) values(?,?,?)`, [recipe_uuid, 1, rec.Ingredients]) )
                console.log('queies', queries)

                Promise.all(queries).then( values => {
                
                    //insert into recipe
    
                    resolve('recipe inserted: ' + values)
                })

                
                
                }).catch((error) =>{
                    console.log(error)
                    reject('No recipe not created' + error)
                });
        

         
        })
    }
}

module.exports = Recipe