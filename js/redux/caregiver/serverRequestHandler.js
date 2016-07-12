import { ajax } from '../util'

var headers = new Headers()
//headers.append('Content-Type', 'application/json')
//headers.append('Access-Control-Allow-Origin', 'http://localhost:7777')
//headers.append('Access-Control-Allow-Credentials', true)

export function getCareGiver(id, remember_token){
  return ajax({
    type: 'GET',
    url: `http://localhost:3000/care_givers/${id}`,
    data: {remember_token: remember_token},
  })
}

export function postLogin(data){
  return ajax({
    url:'http://localhost:3000/login',
    method: 'POST',
    data: data,
  })
}

export function postSignup(){}



