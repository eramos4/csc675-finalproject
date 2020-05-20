import React from 'react';
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

    const registerObject = {};

    const formHandler = (event) =>{
        registerObject[event.target.name] = event.target.value; 
    }

    const submitHandler = async (event) =>{
      event.preventDefault();
      console.log('event submitted');

      console.log('final info to submit:', registerObject)

      try{

        let data = await axios.post('users/api/register', registerObject)
      //console.log('thisis the data', data.status)

        if(data.status === 200) {
           alert('Account Created')
         
         }
        }catch(error){
         
           alert('Creation Failed')
          

        }
    }
  
    return (
      <form className={classes.root} autoComplete="off" onChange={formHandler} onSubmit={submitHandler}>
        <div>
          <TextField required id="standard-required" name="username" label="Create Username" />
          <TextField required id="standard-required" name="password" label="Create Password" />
          <TextField required id="standard-required" name="email_address" label="Email Address" />
         
            <Button style={{ marginTop: "15px"}}  type={"submit"} variant="contained" color="primary">Create Account</Button>  
          
          </div>
    </form>
  );
}
