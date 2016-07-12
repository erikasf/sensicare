//** post
//* @url: String -> path
//* @params: Object -> data which will send to server
//* @success: function 
//* @error: function

import cookie from 'react-cookie';


export function ajax(options){
  return new Promise(function(resolve, reject){
    $.ajax(options).done(resolve).fail(reject)
  })
}

export function setCookie(user){
  const rememberToken = user.remember_token
  if (typeof rememberToken != undefined && rememberToken != null ){
    cookie.save('medux_rt', rememberToken, { path: '/' });
  }
}

export function getRememberTokenFromCookie(){
  return cookie.load('medux_rt')
}

export function clearCookie(){
  cookie.remove('medux_rt', { path: '/' });
}

export function hasSession(auth){
  if (typeof auth == "undefined"){
    return false
  }  
  const { remember_token } = auth
  return typeof remember_token != "undefined" 
}


export function generatePath(currentUser){
  switch (currentUser.user_type) {
    case "Patient":
      return `/patients/${currentUser.id}`
    case "CG":
      return `/caregivers/${currentUser.id}`
    case "FamilyMember":
      return `/family_members/${currentUser.id}`
    default:
      return '/error'
  }
}


