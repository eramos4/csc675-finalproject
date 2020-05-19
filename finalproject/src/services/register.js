import axios from 'axios'


const register = (registerObject) => {
  axios.post('users/api/register', registerObject)
  .then(response => {
    
    console.log(response)
    
  })
  .catch(error => {
    
  })
}

export default {register}