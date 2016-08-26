'use strict'

/* React & Redux modules */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux';

/* Firebase */
import { firebaseDb, firebaseAuth } from '../firebase/init'

/* Redux action */
import {
  currentUser, 
  login,
  signup,
  signout
} from '../redux/auth/action'

function hasSession(auth){
  if (typeof auth == "undefined"){
    return false
  }  
  const { remember_token } = auth
  return typeof remember_token != "undefined" 
}

function generatePath(currentUser){
  console.log(currentUser)
  switch (currentUser.user_type) {
    case "Patient":
      return `/patients/${currentUser.id}`
    case "CareGiver":
      return `/caregivers/${currentUser.id}`
    case "FamilyMember":
      return `/family_members/${currentUser.id}`
  }
}


class Login extends Component {

  constructor(props) {
    super(props);
    this.signup = this.signup.bind(this)
    this.login = this.login.bind(this)
    this.signout = this.signout.bind(this)
  }
 
  login(event){
    event.preventDefault()
    const email = this.refs.login_email.value
    const password = this.refs.login_password.value
    this.props.dispatch(login(email, password))
  }
  
  signup(event){
    event.preventDefault()
    const email = this.refs.signup_email.value
    const password = this.refs.signup_password.value
    this.props.dispatch(signup(email, password))
    this.state = {
      isLogin: this.props.auth.isLogin
    }
  }
  
  userInfo(name){
    const user = this.getCurrentUser()
  }

  signout(){
    this.props.dispatch(signout())
  }
  
  render(){
    return (
      <div className="login-container">
        <form className="form-auth" onSubmit={this.login}>
          <h3 className="h2"><img src="/img/soteria.png" alt="" className="form--auth__logo"/></h3>
          <span className="label">EMAIL</span>
          <input type="text" ref="login_email" />
          <span className="label">PASSWORD</span>
          <input type="text" ref="login_password" />
          { this.props.auth.errorMessage && <h5 className="form--auth__error">{ this.props.auth.errorMessage }</h5> }

          <input type="submit" className="btn--form" value="LOGIN"/>
        </form>
      </div>
   )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Login)


