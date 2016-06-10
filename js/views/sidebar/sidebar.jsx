'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, registerListeners } from '../redux/action'
import { firebaseDb, firebaseAuth } from '../firebase/init'

class Sidebar extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <ul>
        <li>Patients</li>
        <li>Patients</li>
        <li>Geo</li>
        <li>Notification</li>
      </ul>
    )
  }
}
