import { ajax } from '../util'

var headers = new Headers()
//headers.append('Content-Type', 'application/json')
//headers.append('Access-Control-Allow-Origin', 'http://localhost:7777')
//headers.append('Access-Control-Allow-Credentials', true)

export function postCurrentUser(data){
  return ajax({
    url: 'http://localhost:3000/current_user', 
    method: 'POST',
    data: data
  })
}

export function postLogin(data){
  return ajax({
    url:'http://localhost:3000/login',
    method: 'POST',
    data: data,
  })
}

export function postSignup(){
  return ajax({
    url: 'http://localhost:3000/signup',
    type: 'POST',
    data: data
  })
}



