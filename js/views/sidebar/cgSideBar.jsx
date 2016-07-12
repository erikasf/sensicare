import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import Profile from './profile'


class CgSideBar extends Component {

  constructor(props){
    super(props)
  } 

  render(){
    const baseUrl = `/caregivers/${this.props.id}`
    return (
    <aside className="sidebar">
      <div className="sidebar__inner">
        <div className="sidebar__logo">
          <div className="logo">
          </div>
          <div className="client-name">         </div>
        </div>
        <Profile user={this.props.auth}/>
        <nav className="sidebar--nav">
          <h4 className="sidebar--nav__title">MENU</h4>
          <ul>
            <Link to={baseUrl}>
              <li className="sidebar__list">
                <img src="/img/icon/main.png" alt="main" className="icon--sidebar"/>
                <span>Main Board</span>
              </li>
            </Link>
            <Link to={`${baseUrl}/patients`}>
              <li className="sidebar__list">
                <img src="/img/icon/list.png" alt="list" className="icon--sidebar" />
                <span>Patients List</span>
              </li>
            </Link>
            <Link to={`${baseUrl}/tracking`}>
              <li className="sidebar__list">
                <img src="/img/icon/shift.png" alt="" className="icon--sidebar" />
                <span>Shift Schedule</span>
              </li>
            </Link>
            <Link to={`${baseUrl}/register_patient`}>
              <li className="sidebar__list">
                <img src="/img/icon/register.png" alt="" className="icon--sidebar" />
                <span>Register Patient</span>
              </li>
            </Link>
            <Link to={`${baseUrl}/notifications`}>
              <li className="sidebar__list">
                <img src="/img/icon/notification.png" alt="" className="icon--sidebar" />
                <span>Notification</span>
              </li>
            </Link>
          </ul>
          <h4 className="sidebar--nav__title">ADMIN</h4>
            <ul>
              <Link to={baseUrl}>
                <li>Enter New Resident</li>
              </Link>
            </ul>
            <ul>
              <Link to={baseUrl}><li>Enter New Resident</li></Link>
            </ul>
            <ul>
              <Link to={baseUrl}><li>Enter New Resident</li></Link>
            </ul>
            <ul>
              <Link to={baseUrl}><li>Enter New Resident</li></Link>
            </ul>

        </nav>
      </div>
    </aside>
    )
  }
}

export default CgSideBar
