import authReducer from './auth/reducer'
import careGiverReducer from './caregiver/reducer'

import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

export default combineReducers({
  auth: authReducer,
  careGiver: careGiverReducer,
  routing: routerReducer
})

