import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import insertServices from '../services/insert.js'

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

    const insertObject= {Steps: []};
    let step = ''

    const formHandler = (event) =>{
      //event.preventDefault();
      console.log(event.target.name);
      

      //console.log('updated insertObject', insertObject)
      
      if(event.target.name === 'Steps')
      {
        console.log('updating step')
        step = event.target.value;
        console.log(step)
      }
      else
      {
        insertObject[event.target.name] = event.target.value;
        
        ///updateinsertObject({ insertObject , event.target.name: event.target.value})
      }

    }

    const handleStepUpdate = (event) => {
      event.preventDefault();
      console.log('pushing step')
      // update the value of the text field to nothing, then push the step on steps
      insertObject.Steps.push(step) // push step on setps
      step = '' // clear step
      document.getElementById('standard-required-step').value = '' // clear the textfield labeled Steps

    }

    const submitHandler = async (event) =>{
      event.preventDefault();
      console.log('event submitted');

      console.log('final insertObject to submit:', insertObject)
      
      let data = await axios.post('recipe/insert', insertObject)
      console.log("insert data",data)
    }

  
    return (
      <form className={classes.root} autoComplete="off" onChange={formHandler} onSubmit={submitHandler}>
        
            <div>
               <TextField required id="standard-required" name="Title" label="Title" /> 
            </div>
            <div>
                <TextField required id="standard-required" name="Description" label="Description" />
            </div>
            <div>
                <TextField required id="standard-required" name="Ingredients" label="Ingredients" />
            </div>
            <div>
                <TextField required id="standard-required-step" name="Steps" label="Steps" />
                
            </div>
            <div>
              {/* {insertObject.Steps.map(step => <p>{step}</p>)} */}
              {/* <p>{insertObject.Steps}</p> */}
              {/* <p>test</p> */}
              <Button onClick={handleStepUpdate} style={{ marginTop: "15px"}} variant="contained" color="primary">Add Step</Button>  
            </div>
            <div>
                <TextField required id="standard-required" name="Food Category" label="Food Category" />
            </div>
            <div>
                <TextField required id="standard-required" name="Difficulty" label="Difficulty" />
            </div>
            <div>
            <Button type={"submit"} style={{ marginTop: "15px"}} variant="contained" color="primary">Insert Recipe</Button>  
           
            </div>
          
    </form>
  );
}
