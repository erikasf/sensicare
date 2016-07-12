import React, { Component } from 'react'
import { Link } from 'react-router'

class Profile extends Component {
  
  constructor(props){
    super(props)
  } 
 
  render(){
    const { first_name, last_name } = this.props.user
    return (
      <div className="sidebar--profile">
        <h4 className="h4">JUNE 24, 2016  7:30am</h4>
        <h2 className="sidebar--profile__name">{first_name} {last_name}</h2>
        <div className="sidebar--profile__container">
          <div className="sidebar--profile__box">
            <span className="sidebar--profile__label">SECTION</span>
            
            <div>A</div>
          </div>
          <div className="sidebar--profile__box">
            <span className="sidebar--profile__label">LAUNDRY</span>
            <div>A</div>
          </div>
          <div className="sidebar--profile__box">
            <span className="sidebar--profile__label">BATHING</span>
            <div>C</div>
          </div>
        </div>  
      </div>
    )
  }
}

export default Profile
