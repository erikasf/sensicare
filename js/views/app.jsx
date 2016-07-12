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
  switch (currentUser.user_type) {
    case "Patient":
      return `/patients/${currentUser.id}`
    case "CareGiver":
      return `/caregivers/${currentUser.id}`
    case "FamilyMember":
      return `/family_members/${currentUser.id}`
    default:
      return '/error'
  }
}


function validateAccess(currentUser){
  switch (currentUser.user_type) {
    case "Patient":
      return `/patients/${currentUser.id}` == window.location.pathname
    case "CareGiver":
      return `/caregivers/${currentUser.id}`
    case "FamilyMember":
      return `/family_members/${currentUser.id}`
    default:
      return false
  }
}


class App extends Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    console.log("----------------------")
    console.log("App Did mount")
    this.getCurrentUser()
    this.redirect()
  }

  componentWillReceiveProps(){
    if (validateAccess(currentUser)){
      this.redirect()
    }
  }

  isLogined(){
    const auth = this.props.auth
  }

  redirect(){
    const auth = this.props.auth
    const { isLogin } = this.props.auth
   
    if(window.location.pathname != "/" && !hasSession(auth) && isLogin == false){
      console.log("Not signed in")
      this.props.dispatch(push("/"))
    }
   
    if(window.location.pathname == "/" && hasSession(auth)
      && auth.isLogin){
      this.props.dispatch(push(generatePath(auth)))
    }

    if (validateAccess(auth)){
      this.props.dispatch(push(generatePath(auth)))
    }

  }

  getCurrentUser(){
    console.log("current user")
    const { auth } = this.props
    const { isLogin } = auth
    console.log(isLogin)
    console.log(auth)
    if(hasSession(auth) && isLogin == false){
     console.log("has session")
     this.props.dispatch(currentUser(auth.remember_token))
    }

  }

  render(){
    const children = React.Children.map(this.props.children, (child)=>{
      return React.cloneElement(child, ...this.props)
    })

    return (
      <div className="body--wrapper">
        {children}
      </div>
    )
  }
}

// https://github.com/reactjs/react-redux/blob/master/docs/api.md

const mapStateToProps = (state) => ({
  auth: state.auth
})
export default connect(mapStateToProps)(App)
