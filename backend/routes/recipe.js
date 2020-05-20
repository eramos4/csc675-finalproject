var express = require('express');
var router = express.Router();
const db = require('../db')

/* GET users listing. */
router.get('/search/:recipe_key', async (req, res, next) => {
  
    console.log('search key: ', req.params.recipe_key)

    try{
        let recipeData = await db.recipe.search(req.params.recipe_key)
        console.log('recipe data:', recipeData)
        res.status(200).send(recipeData);
    }catch(error){
        res.status(500).send(error)
    }
    
});

router.post('/insert', async (req, res, next) => {
  
    console.log('insert recipe: ', req.body)
    
    try{
        let recipeData = await db.recipe.insert(req.body)
        console.log('recipe data:', recipeData)
        res.status(200).send(recipeData);
    }catch(error){
        res.status(500).send(error)
    }
    
});

router.post('/delete', async (req, res, next) => {
  
    console.log('Deleterecipe: ', req.body)
    
    try{
        let deleteData = await db.recipe.delete(req.body)
        console.log('recipe data:', deleteData)
        res.status(200).send(deleteData);
    }catch(error){
        res.status(500).send(error)
    }
    
});

module.exports = router;
