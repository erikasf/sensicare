'use strict'

import { firebaseDb, firebaseAuth } from '../../firebase/init'
import {
  SIGNUP_ERROR,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNOUT_ERROR
} from './types';

import {
  postLogin,
  postSignup,
  postCurrentUser
} from './serverRequestHandler'

import {
  loginParams,
  currentUserParams
} from './params'


import { push } from 'react-router-redux';

function hasSession(auth){
  if (typeof auth == "undefined"){
    return false
  }  
  const { remember_token } = auth
  return typeof remember_token != "undefined" 
}


function generatePath(currentUser){
  switch (currentUser.user_type) {
    case "Patient":
      return `/patients/${currentUser.uuid}`
    case "CareGiver":
      return `/caregivers/${currentUser.uuid}`
    case "FamilyMember":
      return `/family_members/${currentUser.uuid}`
    default:
      return '/'
  }
}


function recordFromSnapshot(snapshot) {
  let record = snapshot.val();
  record.key = snapshot.key;
  return record;
}

export function currentUser(rememberToken){
  return (dispatch, getState) => {
    const data = currentUserParams(rememberToken)
    postCurrentUser(data).then((res)=>{
      dispatch({ type: LOGIN_SUCCESS, user: res })
    }, (error, responseJSON, status)=>{
      dispatch({ type: LOGIN_ERROR, error: error })
    })
  }
}

export function login(email, password){
  return (dispatch, getState) => {
    const data = loginParams({email: email, password: password})
    postLogin(data).then((res)=>{
      dispatch( {type: LOGIN_SUCCESS, user: res} )
      dispatch( push(generatePath(res)) )
    }, (error, responseJSON, status)=>{
      const errorMessage = error.responseJSON || { "messages": "Server might be down temporary."
 }
      dispatch({ type: LOGIN_ERROR, error: errorMessage })
      
    })
  }
}

export function signup(email, password){
  return (dispatch, getState) => {
    const data = {
      "email_signup" : {
        "session": {
          email: email,
          password: password
        }
      }
    }

    postSignup.then((res)=>{
      dispatch({
        type: SIGNUP_SUCCESS,
        user: res
      })
    }).catch((error)=>{
      dispatch({
        type: SIGNUP_ERROR,
        error: error
      })
    })

  }
}

export function logout(){
  return (dispatch, getState) => {
    dispatch({
      type: SIGNOUT_SUCCESS
    })
    dispatch(push("/"))
  }
}


export function getUser(){
  return (dispatch, getState =>{  
  })
}
//
//export function registerListeners() {
//  return (dispatch) => {
//    const ref = firebaseDb.ref("todos/keioka");
//    ref.on('child_added', snapshot => dispatch({
//      type: CREATE_TASK_SUCCESS,
//      payload: recordFromSnapshot(snapshot)
//    }));
//
//    ref.on('child_changed', snapshot => dispatch({
//      type: UPDATE_TASK_SUCCESS,
//      payload: recordFromSnapshot(snapshot)
//    }))
//  }
//}

