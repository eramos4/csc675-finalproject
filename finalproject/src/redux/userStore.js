import {createStore} from 'redux'

const initialState = {
  username: '',
  loggedIn: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER': 
      return {
        ...state,
        username: action.data.username,
        loggedIn: true
      }
    case 'LOGOUT_USER': 
      return {
        ...state,
        username: '',
        loggedIn: false
      }
    default:
      return state
  }
}

const userStore = createStore(userReducer)

export default userStore