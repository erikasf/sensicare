'use strict'

/* React & Redux modules */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux';


export default class Error401 extends Component {

  constructor(props) {
    super(props);
  }
 
  render(){
    return (
      <div className="login-container">
        401 Unauthoriaze
      </div>
   )
  }
}

