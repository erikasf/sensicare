import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
class CgSideBar extends Component {
  
  constructor(props){
    super(props)
  } 
  render(){
    
    const baseUrl = `/caregivers/${this.props.id}`
    return (
      <aside>
        <ul>
          <li><Link to={baseUrl}>Patients</Link></li>
          <li><Link to={`${baseUrl}/patients`}>Patients (Not assigned)</Link></li>
          <li><Link to={`${baseUrl}/tracking`}>Geo Tracking</Link></li>
          <li><Link to={`${baseUrl}/notifications`}>Notification</Link></li>
        </ul>
      </aside>
    )
  }
}

export default CgSideBar
