'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  login,
  signup,
  signout
} from '../redux/auth/action'

import { firebaseDb, firebaseAuth } from '../firebase/init'

class Login extends Component {

  constructor(props) {
    super(props);
    this.signup = this.signup.bind(this)
    this.login = this.login.bind(this)
    this.signout = this.signout.bind(this)
  }
 
  login(event){
    event.preventDefault()
    const email = this.refs.l_email.value
    const password = this.refs.l_password.value
    this.props.dispatch(login(email, password))
  }
  
  signup(event){
    event.preventDefault()
    const email = this.refs.s_email.value
    const password = this.refs.s_password.value
    this.props.dispatch(signup(email, password))
  }
  
  userInfo(name){
    const user = this.getCurrentUser()
    //firebaseDb.ref(`users/${user.uid}`).set({
    // name: name
    //})
  }
  
  update(event){
    event.preventDefault()
    const user = this.getCurrentUser()
    const name = this.refs.name.value
    const success = function(){
      console.log("update success")
      console.log(user.name)
      this.userInfo(name)
      console.log(user)
    }.bind(this)
  
    const error =  function(error){
      console.log(`update error: ${error}`)
    }
  
    user.updateProfile({
      name: "Kei"
    }).then(success, error)
  
  }

  signout(){
    this.props.dispatch(signout())
  }
  
  render(){
    return (
      <div class="body--wrapper">
        <h3>Signin</h3>
        <form onSubmit={this.signup}>
          <input type="text" ref="s_email" />
          <input type="text" ref="s_password" />
          <input type="submit" />
        </form>
        <h3>Login</h3>
        <form onSubmit={this.login}>
          <input type="text" ref="l_email" />
          <input type="text" ref="l_password" />
          <input type="submit" />
        </form>
        <button onClick={this.signout}>Sign Out</button>
      </div>

   )
  }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(Login)


