import axios from 'axios'



const login = async (loginObject) => {
  // axios.post('users/api/login', loginObject)
  // .then(response => {
  //  if(response.status === 200) {
  //     alert('User Login Successfull')
  //   } 

  
  // })
  // .catch(error => {
  //   console.log(error)
  //   alert("User Login Successful")
  // })
  
  try{

    let data = await axios.post('users/api/login', loginObject)
  //console.log('thisis the data', data.status)

    if(data.status === 200) {
       alert('Login Successful')
     
     }
    }catch(error){
     
       alert('Login Failed')
      

    }
}



export default {login}
