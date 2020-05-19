import axios from 'axios'



const login = (loginObject) => {
  axios.post('users/api/login', loginObject)
  .then(response => {
   if(response.status === 204) {
      alert('User not found please register')
    } 

    if(response.status === 200)
    {
      alert("User Login Successful")
    }
    
  })
  .catch(error => {
    console.log(error)
  })
}

export default {login}
