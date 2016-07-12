import React, { Component } from 'react'
import { Link } from 'react-router'

import { logout } from '../../redux/auth/action'
import { connect } from 'react-redux'

import { push } from 'react-router-redux';

class Header extends Component {
  
  constructor(props){
    super(props)
    this.logout = this.logout.bind(this)
  } 

  logout(event){
    event.preventDefault()
    this.props.dispatch(logout())
  }

  render(){
    
    return (
      <header className="main--header">
        <nav className="header__menu">
          <ul>
            <li><img src="/img/icon/alert.png" alt="alert" className="icon--header" /></li>
            <li onClick={this.logout} class="header__menu__list">LOGOUT</li>
          </ul>
        </nav>
      </header>
    )
  }
}


const mapStateToProps = (state) => ({
  auth: state.auth
})
export default connect(mapStateToProps)(Header)
