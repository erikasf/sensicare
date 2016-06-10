'use strict'

import { firebaseDb, firebaseAuth } from '../../firebase/init'
import { ajax } from '../util'
import {
  SIGNUP_ERROR,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNOUT_ERROR
} from './types';

function recordFromSnapshot(snapshot) {
  let record = snapshot.val();
  record.key = snapshot.key;
  return record;
}

function userType(user){
  switch(user.type){
    case "patient":
    case "familyMember":
    default:
  }
}


//export function addTodo(text){
//  return (dispatch, getState) => {
//    const todos = firebaseDb.ref("todos/keioka")
//    todos.push().set({
//      text: text
//    }, error => {
//      if (error) {
//        dispatch({
//          type: CREATE_TASK_ERROR,
//          payload: error
//        })
//      }
//    })
//  }
//}


export function login(email, password){
  return (dispatch, getState) => {
    firebaseAuth.signInWithEmailAndPassword(email, password).catch(function(error) {
     dispatch({
        type: LOGIN_ERROR,
        payload: error
      })
    });
  }
}

//export function signup(email, password){
//  return (dispatch, getState) => {
//    firebaseAuth.createUserWithEmailAndPassword(email, password).catch(function(error) {
//      console.log("error")
//      dispatch({
//        type: SIGNUP_ERROR,
//        payload: error
//      })
//    });
//  }
//}

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

    ajax({
      type: 'POST',
      url: 'http://localhost:3000/signup',
      data: data
    }).then((res)=>{
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

export function signout(){
  return (dispatch, getState) => {
    firebaseAuth.signOut().then(function(){
      dispatch({
        type: SIGNOUT_SUCCESS
      })
    }, function(error){
      dispacth({
        type: SIGNOUT_ERROR,
        payload: error
      })
    })
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

