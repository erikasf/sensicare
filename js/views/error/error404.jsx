'use strict'

/* React & Redux modules */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux';


export default class Error404 extends Component {

  constructor(props) {
    super(props);
  }
 
  render(){
    return (
      <div className="login-container">
        404 Not Found
      </div>
   )
  }
}

