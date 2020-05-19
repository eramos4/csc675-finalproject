import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import loginServices from '../services/login'

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

    const loginInfo = {};
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const formHandler = (event) =>{
        loginInfo[event.target.name] = event.target.value; 
    }

    const submitHandler = (event) =>{
      event.preventDefault();
      console.log('event submitted');

      console.log('final info to submit:', loginInfo)

    }

    const handleUsernameChange = (event) => {
      setUsername(event.target.value)
    }
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value)
    }

    const submitLoginData = (event) => {
      event.preventDefault()
  
      if(username.length < 1 || password.length < 1) {
        alert('Please enter a username and password')
      } else {
        const loginObject = {
          username: username,
          password: password,
        }
        console.log(loginObject)
        loginServices.login(loginObject)
      }
    }
  
  
    return (
      <form className={classes.root} autoComplete="off"  onChange={formHandler} onSubmit={submitLoginData}>
        <div>
          <TextField required id="standard-required" name="username" label="Username" onChange={handleUsernameChange}/>
          <TextField required id="standard-required" name="password" label="Password" onChange={handlePasswordChange}/>
          <Button style={{ marginTop: "15px"}}  type={"submit"} variant="contained" color="primary">Login</Button>
          </div>
    </form>
  );
}
