import axios from 'axios'



const baseUrl = '/api/insert'

const insert = (insertObject) => {
  axios.post(baseUrl, insertObject)
  .then(response => {
   if(response.status === 200) {
      alert('Account Created')
    
    } else if(response.status === 500) {
      alert('Creation Failed')
    }
    
  })
  .catch(error => {
    console.log(error)
  })
}

export default {insert}
