import {createStore} from 'redux'

const initialState = {
  search: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH': 
      return {
        ...state,
        search: action.data.search,
      }
    default:
      return state
  }
}

const searchStore = createStore(userReducer)

export default searchStore