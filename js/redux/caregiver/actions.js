'use strict'

import { firebaseDb, firebaseAuth } from '../../firebase/init'
import { 
  LOAD_PATIENTS_SUCCESS,
  LOAD_PATIENTS_LIST 
} from './types';
import { ajax } from '../util'

export function loadPatients(id){
  return (dispatch, getState) =>{ 
    ajax({
      type: 'GET',
      url: `http://localhost:3000/care_givers/${id}`
    }).then((res)=>{
      dispatch({
        type: LOAD_PATIENTS_SUCCESS,
        result: res
      })
    }).catch((error)=>{
      dispatch({
        type: '',
        error: error
      })
    })
  }
}


