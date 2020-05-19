import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

    const updateInfo = {};

    const formHandler = (event) =>{
      updateInfo[event.target.name] = event.target.value; 
    }

    const submitHandler = (event) =>{
      event.preventDefault();
      console.log('event submitted');

      console.log('final info to submit:', updateInfo)

    }
  
    return (
      <form className={classes.root} noValidate autoComplete="off" onChange={formHandler} onSubmit={submitHandler}>
        <div>
        <TextField id="standard-search" label="Search Recipe to Update" name="update" type="search" />
         
            <Button style={{ marginTop: "15px"}} type={"submit"} variant="contained" color="primary">Search</Button>  
          
          </div>
    </form>
  );
}
