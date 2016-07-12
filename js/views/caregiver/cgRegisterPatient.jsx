import React, { Component } from 'react'
import { Link } from 'react-router'

import { registerPatient } from '../../redux/hospital/actions'

class CgRegisterPatient extends Component {
  
  constructor(props){
    super(props)
    this.onSubmitRegisterForm = this.onSubmitRegisterForm.bind(this)
  } 

  renderPatientsList(){
    const hospital = this.props.hospital
    const patientsList = (typeof hospital.patients == "undefined") ? null : hospital.patients.map((patient)=>{
        
      const { 
        first_name,
        last_name,
        id,
        room_number
      } = patient

      const url = `/patients/${id}`     
      return (
        <tr key={id}>
          <td>{id}</td>
          <td><Link to={url}>{first_name} {last_name}</Link></td>
          <td>{room_number}</td>
          <td><button className="btn--card">Deregister</button></td>
        </tr>
      )
    })
    return patientsList
  }

  onSubmitRegisterForm(event){
    event.preventDefault()
    const { firstName, lastName, roomNumber, deviceId } = this.refs
    this.props.dispatch(registerPatient({
      first_name: firstName.value,
      last_name: lastName.value,
      room_number: roomNumber.value,
      device_id: deviceId.value
    }))
  }

  renderRegisterForm(){
    return (
      <div className="card">
        <h5 className="card__title">REGISTER NEW PATIENT</h5>
        <form className="card__form" onSubmit={this.onSubmitRegisterForm}>
          <div className="card__form__section">
            <label for="first_name" className="card__form__label">FISRT NAME</label><input type="text" ref="firstName"/>
            <lable for="last_name" className="card__form__label">LAST NAME</lable><input type="text" ref="lastName"/>
            <lable for="room_number" className="card__form__label">Room Number</lable><input type="text" ref="roomNumber"/>
          </div>
          <div className="card__form__section">
            <lable for="device_id" className="card__form__label">Device ID</lable><input type="text" ref="deviceId"/>
          </div>  
          <input type="submit" className="btn--card" value="Add" />
        </form>
      </div>
    )
  }

  render(){
    
    return (
    <div>
      {this.renderRegisterForm()}
      <div className="card">
        <h5 className="card__title">ALL  PATIENT</h5>
        <table className="card--shift__table">
          <tbody>
            <tr className="card--shift__header">
              <th>UID</th>
              <th>NAME</th>
              <th>ROOM No</th>
              <th>STATUS</th>
            </tr>
          {this.renderPatientsList()}
          </tbody>
        </table>
      </div>
    </div>
    )
  }
}

export default CgRegisterPatient
