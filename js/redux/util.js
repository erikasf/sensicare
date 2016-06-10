//** post
//* @url: String -> path
//* @params: Object -> data which will send to server
//* @success: function 
//* @error: function

export function ajax(options){
  return new Promise(function(resolve, reject){
    $.ajax(options).done(resolve).fail(reject)
  })
}

export function setCookie(user){
  const rememberToken = user.remember_token
  if (typeof rememberToken != undefined && rememberToken != null ){
    document.cookie = `rt=${rememberToken};`
  }
}

export function getCookies(){
  var pairs = document.cookie.split(";");
  var cookies = {};
  for (var i=0; i<pairs.length; i++){
    var pair = pairs[i].split("=");
    cookies[pair[0]] = unescape(pair[1]);
  }
  return cookies;
}

export function getRememberTokenFromCookie(){
  const rememberToken = _getCookies().rt
  _rememberToken = rememberToken ? rememberToken : ""
  return _rememberToken
}

export function clearCookie(){
  _deleteAllCookies();
}

function _deleteAllCookies(){
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}
