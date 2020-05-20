import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  const searchInfo = {};

  const [returnRecipes, setReturnRecipes] = useState([])
  

  const formHandler = (event) =>{
      searchInfo[event.target.name] = event.target.value; 
  }


  const formatRecipe = (data) => {

    return new Promise ((resolve, reject) => {

      let arr = [{recipe: []}];

      arr[0].recipe.push(data[0])
      arr[0].recipe.push(data[data.length - 1])

      let steps = []
      for(let i = 1; i < data.length; ++i)
      {
        steps.push(data[i].content)
      }

      arr[0].recipe.push(steps)

      console.log(arr)

      resolve(arr)

    })
  }

  const deleteHandler = async (returnRecipes) => {
    try{
      let data = await axios.post('recipe/delete', returnRecipes.recipe[0].uuid)
    
       
        console.log(data)
          
        }catch(error){
         
           alert('Unable to delete')
          
    
        }
  }


  const renderRecipe = () => {
    if(returnRecipes.length < 1){
      return <div></div>
    }else{

        console.log('returned recipes: ', returnRecipes)
      return returnRecipes.map(rec => 

        
        
        //const {title, description, ingredients,steps, foodCategory, difficulty} = returnRecipes;
          <div>
             <p>Title: {rec.recipe[0].title}</p>
             <p>Description: {rec.recipe[0].description}</p>
             {/* 
             <p>Ingredients: {rec.recipe[1].ingredient_name}</p>
      <p>Steps: {rec.recipe[2].map(step => <p>{step}</p>)}</p> 
             <p>Food Category: {rec.recipe[0].food_category}</p>
             <p>Difficulty: {rec.recipe[0].author_diffculty}</p> */}
             <form onSubmit={deleteHandler}>
             <Button style={{ marginTop: "15px"}} type={"submit"} variant="contained" color="primary">Delete</Button>  
             </form>
          </div>

        )
      }
    }
  

  const submitHandler = async (event) =>{
    event.preventDefault();
 
    console.log('event submitted');

    console.log('final info to submit:', searchInfo)

    try{
      let data = await axios.get(`/recipe/search/${searchInfo.search}`)
       
        
          setReturnRecipes(await formatRecipe(data.data))
        }catch(error){
         
           alert('Recipe Not Found')
          
    
        }
    
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onChange={formHandler} onSubmit={submitHandler}>
      <div>
      <TextField id="standard-search" label="Search Recipe" name="search" type="search" />
       
          <Button style={{ marginTop: "15px"}} type={"submit"} variant="contained" color="primary">Search</Button>  
          {renderRecipe()}
        </div>
        
  </form>
);

// export default function FormPropsTextFields() {
//     const classes = useStyles();

//     const deleteInfo = {};

//     const formHandler = (event) =>{
//       deleteInfo[event.target.name] = event.target.value; 
//     }

//     const submitHandler = (event) =>{
//       event.preventDefault();
//       console.log('event submitted');

//       console.log('final info to submit:', deleteInfo)

//     }
  
//     return (
//       <form className={classes.root} noValidate autoComplete="off" onChange={formHandler} onSubmit={submitHandler}>
//         <div>
//         <TextField id="standard-search" label="Search Recipe to Delete" name="delete" type="search" />
         
//             <Button style={{ marginTop: "15px"}} type={"submit"} variant="contained" color="primary">Search</Button>  
          
//           </div>
//     </form>
//   );
}
