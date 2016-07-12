import { 
  setCookie,
  getRememberTokenFromCookie,
  clearCookie
} from '../util'
// reducer is just return new state 

// Do not
// - modify data inside reducer
// - call api and change rooting
// - Use Date.now and Math.random

// Not
// modify old state
// Object.assign(state, { visibilityFilter: action.filter } )

// OK
// create new and empty object and merge old state and result
// Object.assign({}, state, { visibilityFilter: action.filter })


// combineReducers()
//
// import { createStore } from 'redux'
// import todoApp from './reducers'
// let store = createStore(todoApp)
//

const initialState = typeof (getRememberTokenFromCookie() != "undefined") ? { remember_token: getRememberTokenFromCookie(), isLogin: false } : null

export default function reducer(previousState = initialState, action){
  switch (action.type) {

    case "SIGNUP_SUCCESS":
      setCookie(action.user)

    case "SIGNUP_ERROR":
      return previousState

    case "LOGIN_SUCCESS":
      console.log("Login Success")
      setCookie(action.user)
      return Object.assign({}, {isLogin: true}, action.user)

    case "LOGIN_ERROR":
      let errorMessage = action.error.messages 
      clearCookie()
      return Object.assign({}, previousState, {errorMessage: errorMessage})

    case "SIGNOUT_SUCCESS":
      clearCookie()
      return Object.assign(previousState, {isLogin: false})

    case "SIGNOUT_ERROR":
      return previousState

    default :
  	  return previousState;

  }
}
