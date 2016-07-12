// Store
// save and keep state (data form server)
// has functionality
//   - getState -> get state 
//   - dispatch -> update state
//   - subscribe -> add listener


// Store has to be only one
// To divide store into small states (userStore, commentStore), use reducer composition

import { 
  applyMiddleware, 
  combineReducers, 
  compose, 
  createStore 
} from 'redux'
import reducers from './reducers'
import logger from 'redux-logger'
import { browserHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk';
import { 
  routerMiddleware, 
  syncHistoryWithStore, 
  routerReducer 
} from 'react-router-redux'


//***********
// Dev tool
//***********

import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

// middleware
// Redux middleware is designed by creating functions that can be composed together before the main dispatch method is invoked


// In the case of Redux middleware the main execution task is the store’s dispatch function.

// The most common use case for middleware is to support asynchronous actions without much boilerplate code or a dependency on a library like Rx

// Middleware is not baked into createStore and is not a fundamental part of the Redux architecture, but we consider it useful enough to be supported right in the core. This way, there is a single standard way to extend dispatch in the ecosystem, and different middleware may compete in expressiveness and utility.


// http://redux.js.org/docs/api/applyMiddleware.html

// applyMiddleware(...middlewares)
//   ...middlewares (arguments): Functions that conform to the Redux middleware API. Each middleware receives Store’s dispatch and getState functions as named arguments, and returns a function. That function will be given the next middleware’s dispatch method, and is expected to return a function of action calling next(action) with a potentially different argument, or at a different time, or maybe not calling it at all. The last middleware in the chain will receive the real store’s dispatch method as the next parameter, thus ending the chain. So, the middleware signature is ({ getState, dispatch }) => next => action.

//***
//* middleware
//*
//
let middlewares = [thunkMiddleware, routerMiddleware(browserHistory)];

if (process.env.NODE_ENV !== 'production') {
   let loggerMiddleware = logger();
   middlewares.push(loggerMiddleware);
}

let finalCreateStore = compose(
  applyMiddleware(...middlewares)
)(createStore)


export default function configureStore(devtool) {
  return finalCreateStore(
    reducers,
    devtool.instrument()
  )
}

// http://stackoverflow.com/questions/33749759/read-stores-initial-state-in-redux-reducer/33791942#33791942
