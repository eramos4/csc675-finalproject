import axios from 'axios'



const baseUrl = '/api/insert'

const insert = (insertObject) => {
  axios.post(baseUrl, insertObject)
  .then(response => {
   if(response.status === 204) {
      alert('Insert Failed')
    
    } 
    // else {
    //   localStorage.setItem('username', insertObject.username)
    //   userStore.dispatch({
    //     type: 'LOGIN_USER',
    //     data: {
    //       username: insertObject.username,
    //       loggedIn: true
    //     }
    //   })
      
    // }
  })
  .catch(error => {
    console.log(error)
  })
}

export default {insert}
