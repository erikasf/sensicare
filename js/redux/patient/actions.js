'use strict'

import { firebaseDb, firebaseAuth } from '../../firebase/init'
import {
  LOAD_HD_SUCCESS,
  ADD_HD_SUCCESS,
  UPDATE_HD_SUCCESS,
  DELETE_HD_SUCCESS,
  LOAD_PATIENT_SUCCESS,
  LOAD_FETCHDATA_SUCCESS
} from './types';

import { ajax } from '../util'

export function loadPatient(id){

  return (dispatch, getState) => { 
    ajax({
      type: 'GET',
      url: `http://localhost:3000/patients/${id}`
    }).then((res) => {
      dispatch({
        type: LOAD_PATIENT_SUCCESS,
        patient: res
      })
      dispatch(registerListeners(res.device_id))
    }).catch((error)=>{
      dispatch({
        type: '',
        error: error
      })
    })

  }
}


export function fetchDeviceData(id){

  return (dispatch, getState) => {
    firebaseDb.ref(`healthData/${id}`)
    .once('value')
    .then(function(snapshot){
      dispatch({
        type:LOAD_HEALTHDATA_SUCCESS,
        data: snapshot.val()
      })
    })
    .catch(function(error){
      console.log(error)
    })
  }
}


export function registerListeners(id) {
  console.log("Listener is setteled")
  console.log(id) 
  return (dispatch, getState) => {

    const ref = firebaseDb.ref(`healthData/${id}`);

    ref.on('child_added', snapshot => dispatch({
      type: ADD_HD_SUCCESS_CG,
      payload: recordFromSnapshot(snapshot)
    }));

    ref.on('child_changed', snapshot => dispatch({
      type: UPDATE_HD_SUCCESS_CG,
      payload: recordFromSnapshot(snapshot)
    }));

    ref.on('child_removed', snapshot => dispatch({
      type: DELETE_HD_SUCCESS,
      payload: recordFromSnapshot(snapshot)
    }));
  };
}

function recordFromSnapshot(snapshot) {
  let record = snapshot.val();
  record.key = snapshot.key;
  return record;
}
