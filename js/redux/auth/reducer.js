import { setCookie } from '../util'
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
const initialState = {}
export default function reducer(previousState = initialState, action){
  switch (action.type) {

//    case 'CREATE_TASK_SUCCESS':
//      return Object.assign({}, previousState, {
//        user: [{
//          key: action.payload.key,
//          text: action.payload.text
//        }, ...previousState.todos]
//      })
   case "SIGNUP_SUCCESS":
      setCookie(action.payload.user)
    case "SIGNUP_ERROR":
      console.log(action.payload.message)
      return previousState
    case "LOGIN_SUCCESS":

    case "LOGIN_ERROR":
      console.log(action.payload.message)
      return previousState

    case "SIGNOUT_SUCCESS":
      console.log("Signout")
      return previousState
    
    case "SIGNOUT_ERROR":
      console.log(action.payload.message)
      return previousState
    
    default :
  	  return previousState;
 
  }
}
