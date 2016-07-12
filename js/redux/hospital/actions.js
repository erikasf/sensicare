'use strict'

import { firebaseDb, firebaseAuth } from '../../firebase/init'
import {
  LOAD_HOSPITAL_SUCCESS,
  SUCCESS_REGISTER_PATIENT
} from './types';

import { ajax } from '../util'


export function loadHospital(id){
 
  return (dispatch, getState) =>{
    ajax({
      type: 'GET',
      url: `http://localhost:3000/hospitals/${id}`
    }).then((res)=>{
      dispatch({
        type: LOAD_HOSPITAL_SUCCESS,
        hospital: res
      })
    }).catch((error)=>{
      dispatch({
        type: '',
        error: error
      })
    })
 
  }
}

export function registerPatient(data){
  
   return (dispatch, getState) => {
    const hospital = getState().hospital
    console.log(hospital)
    const url = `http://localhost:3000/hospitals/${hospital.id}/register_patient`
    ajax({
      type: 'POST',
      url: url,
      data: {"patient_params": data}
    }).then((res)=>{
      dispatch({type: SUCCESS_REGISTER_PATIENT, patient: res})
    }).catch((error)=>{
    })
  }
}



