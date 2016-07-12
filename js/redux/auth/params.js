export function loginParams(data){
  if (typeof data.email == "undefined") {
    throw new "Email is not defined"
  }

  if (typeof data.password == "undefined") {
    throw new "Password is not defined"
  }

  return {
    "email_login" : {
      email: data.email,
      password: data.password
    }
  }
}

export function currentUserParams(rememberToken){
  if (typeof rememberToken == "undefined") {
    throw new "RememberToken is not defined"
  }

  return {
    "current_user" : {
      remember_token: rememberToken 
    }
  }

}
