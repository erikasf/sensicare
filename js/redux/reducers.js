import authReducer from './auth/reducer'
import careGiverReducer from './caregiver/reducer'
import patientReducer from './patient/reducer'
import hospitalReducer from './hospital/reducer'

import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

export default combineReducers({
  auth: authReducer,
  careGiver: careGiverReducer,
  patient: patientReducer,
  hospital: hospitalReducer,
  routing: routerReducer
})

