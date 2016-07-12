'use strict'

import { firebaseDb, firebaseAuth } from '../../firebase/init'
import { 
  LOAD_CAREGIVER_SUCCESS,
  LOAD_CAREGIVER_FAIL,
  LOAD_HEALTHDATA_SUCCESS,
  LOAD_PATIENTS_LIST, 
  ADD_HD_SUCCESS_CG,
  UPDATE_HD_SUCCESS_CG,
  DELETE_HD_SUCCESS_CG,
  SUCCESS_REGISTER_PATIENT
} from './types';

import { loadHospital } from '../hospital/actions'

import { getCareGiver } from './serverRequestHandler'

import { ajax } from '../util'

import { push } from 'react-router-redux';

export function loadCaregiver(id, remember_token){
  
  return (dispatch) => {
    getCareGiver(id, remember_token)
    .then((res)=>{
      dispatch({ type: LOAD_CAREGIVER_SUCCESS, result: res })
      dispatch(loadHospital(res.hospital_id))
      dispatch(fetchHealthData(res))
    })
    .catch((error)=>{
      const { responseText } = error
      dispatch({ type: 'LOAD_CAREGIVER_FAIL', error: JSON.parse(responseText) })
      dispatch(push('/not_found'))
    })
  }
}

export function fetchHealthData(res){

  return (dispatch, getState) => {
    res.shifts.forEach(function(shift) { 
      const deviceId = shift.patient.device_id
      dispatch(registerListeners(deviceId, false))
      console.log(deviceId)
      if (deviceId){
        firebaseDb.ref(`healthData/${deviceId}`)
        .once('value')
        .then(function(snapshot){
          if(snapshot.val()){
            dispatch({
              type:LOAD_HEALTHDATA_SUCCESS,
              data: snapshot.val(),
              id: shift.patient.id
            })
          }
        }).then(function(){
        }).catch(function(error){
          console.log(error)
        })
      }
    }) 
  }
}

export function addShifts(data) {
  console.log("Add shift")
  const url = `http://localhost:3000/care_givers/${data.id}/shifts`
  
  return (dispatch, getState) => {
    const remember_token = getState().auth.remember_token
    const finalData = Object.assign({}, data, {remember_token: remember_token})
    ajax({
      type: 'POST',
      url: url,
      data: finalData
    }).then((res)=>{
    
    }).catch((error)=>{
    
    })
  }

}

export function registerListeners(id, hasNewData) {
  console.log("Listener is setteled")

  return (dispatch, getState) => {
    const ref = firebaseDb.ref(`healthData/${id}`);
    
    ref.limitToLast(1).on('child_added', snapshot => {
        dispatch({
          type: ADD_HD_SUCCESS_CG,
          data: recordFromSnapshot(snapshot),
          device_id: id
        })
    });

    ref.on('child_changed', snapshot => dispatch({
      type: UPDATE_HD_SUCCESS_CG,
      data: recordFromSnapshot(snapshot),
      device_id: id
    }));

    ref.on('child_removed', snapshot => dispatch({
      type: DELETE_HD_SUCCESS_CG,
      data: recordFromSnapshot(snapshot),
      device_id: id
    }));
  };
}


function recordFromSnapshot(snapshot) {
  let record = snapshot.val();
  record.key = snapshot.key;
  return record;
}
